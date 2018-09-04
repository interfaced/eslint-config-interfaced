# eslint-config-interfaced

This package provides extendable shared [ESLint](https://eslint.org) config for the approaches adopted by [Interfaced](https://interfaced.tv/) company.

Config's target environment leverages ECMAScript 6 with [Closure Compiler](https://developers.google.com/closure/compiler).  
Also there is an extra config as an extension of the base config with some adjusting for [ZombieBox](https://zombiebox.tv) framework environment.

## Usage

1) Install the package and the required plugins:

```sh
npm info "eslint-config-interfaced@latest" peerDependencies
```

```sh
npm i \
    eslint-config-interfaced@latest \
    eslint-plugin-interfaced@<versionFromInfo> \
    eslint-plugin-goog@<versionFromInfo> \
--save-dev
```

Or using `npx`'s shortcut:

```sh
npx install-peerdeps eslint-config-interfaced@latest --dev
```

2) Add `"extends": "interfaced"` or `"extends": "interfaced/zombiebox"` to your .eslintrc file.

## Configuration

For a proper work of some rules you should specify domains (first part of a namespace) and known namespaces by shared settings:

```json
{
	"settings": {
		"domains": ["myapp"],
		"knownNamespaces": ["myapp.Application", "myapp.ServiceContainer"]
	}
}
```

You can omit `knownNamespaces`, but in this case auto fix by `--fix` flag will not work for rules that depend on it.

To ease retrieval of all known namespaces you can use an utility that is provided by `eslint-plugin-goog` package:

```javascript
// Your .eslintrc.js

const path = require('path');
const {nsUtils} = require('eslint-plugin-goog');

module.exports = {
	extends: 'interfaced',
	settings: {
		domains: ['myapp'],
		knownNamespaces: nsUtils.findByPattern(path.join(__dirname , 'app', 'myapp'))
	}
};
```

## ZombieBox

A typical configuration for ZombieBox environment looks like below:

```javascript
// Your .eslintrc.js

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
