# eslint-config-interfaced

This package provides extendable shared [ESLint](https://eslint.org) config for the approaches adopted by [Interfaced](https://interfaced.tv/) company.

Config's target environment leverages ECMAScript 6 with [Closure Compiler](https://developers.google.com/closure/compiler).  

Also there is a few sub configs:

* `interfaced/node` - for [Node.js](https://nodejs.org)
* `interfaced/esm` - for [ECMAScript modules](https://www.ecma-international.org/ecma-262/6.0/#sec-modules)
* `interfaced/externs` - for [Closure Compiler Externs](https://developers.google.com/closure/compiler/docs/api-tutorial3#externs)
* `interfaced/zombiebox` - for [ZombieBox](https://zombiebox.tv)
* `interfaced/mocha-chai` - for [Mocha](https://mochajs.org) + [Chai](https://www.chaijs.com)

## Usage

1) Install the package and the required plugins:

```sh
npm info "eslint-config-interfaced@latest" peerDependencies
```

```sh
npm i \
    eslint-config-interfaced@latest \
    eslint-plugin-interfaced@<versionFromPeerDependencies> \
    eslint-plugin-goog@<versionFromPeerDependencies> \
    eslint-plugin-node@<versionFromPeerDependencies> \
    eslint-plugin-import@<versionFromPeerDependencies> \
--save-dev
```

Or using `npx`'s shortcut:

```sh
npx install-peerdeps eslint-config-interfaced@latest --dev
```

**Note**: `eslint-plugin-goog`, `eslint-plugin-node` and `eslint-plugin-import` are required only for
`interfaced/zombiebox`, `interafced/node` and `interfaced/esm` respectively, so if you are not going to use one of these sub configs you can omit them.

2) Add `"extends": "interfaced"` (or one of the sub configs) to your `.eslintrc` file.

## Overrides

Currently ESLint [doesn't support](https://github.com/eslint/eslint/issues/8813) extending in overrides,
so the next configuration is invalid and leads to `Unexpected top-level property "overrides[0].extends` error:

```json
{
	"extends": "interfaced",
	"overrides": [{
		"files": "scripts/**",
		"extends": "interfaced/node"
	}]
}
```

To work around this, you can require the overrides of the desired sub config directly (`.js` extension for `.eslintrc` is required):

```js
module.exports = {
	extends: 'interfaced',
	overrides: [{
		files: 'scripts/**',
		...require('eslint-config-interfaced/overrides/node')
	}]
};
```

## ZombieBox

For a proper work of some rules you should specify domains (first part of a namespace) and known namespaces by shared settings:

```json
{
	"extends": "interfaced/zombiebox",
	"settings": {
		"domains": ["myapp"],
		"knownNamespaces": ["myapp.Application", "myapp.ServiceContainer"]
	}
}
```

You can omit `knownNamespaces`, but in this case auto fix by `--fix` flag will not work for rules that depend on it.

To ease retrieval of all known namespaces you can use an utility that is provided by `eslint-plugin-goog` (`.js` extension for `.eslintrc` is required):

```js
const path = require('path');
const {nsUtils} = require('eslint-plugin-goog');

module.exports = {
	extends: 'interfaced/zombiebox',
	settings: {
		domains: ['myapp'],
		knownNamespaces: nsUtils.findByPattern(path.join(__dirname , 'app', 'myapp'))
	}
};
```

So, a typical configuration for ZombieBox environment looks like below:

```js
const path = require('path');
const {nsUtils} = require('eslint-plugin-goog');

const knownNamespaces = [
	...nsUtils.findByPattern(path.join(__dirname , 'app', 'myapp', '**', '*.js')),
	...nsUtils.findByPattern(path.join(__dirname , '.code-cache', '**', '*.js')),
	...nsUtils.findByPattern(path.join(__dirname , 'node_modules', 'zombiebox', '**', '*.js')),
	...nsUtils.findByPattern(path.join(__dirname , 'node_modules', 'zombiebox-*', 'lib', '**', '*.js'))
];

module.exports = {
	extends: 'interfaced/zombiebox',
	globals: {
		myapp: true
	},
	settings: {
		domains: ['myapp'],
		knownNamespaces
	}
};
```
