# eslint-config-interfaced

This package provides extendable shared [ESLint](https://eslint.org) config for the approaches adopted by [Interfaced](https://interfaced.tv/) company.

Config's target environment leverages ECMAScript 6 with [Closure Compiler](https://developers.google.com/closure/compiler).  

Also there is a few sub configs:

* `interfaced/node` - for [Node.js](https://nodejs.org)
* `interfaced/esm` - for [ECMAScript modules](https://www.ecma-international.org/ecma-262/6.0/#sec-modules)
* `interfaced/externs` - for [Closure Compiler Externs](https://developers.google.com/closure/compiler/docs/api-tutorial3#externs)
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
    eslint-plugin-node@<versionFromPeerDependencies> \
    eslint-plugin-import@<versionFromPeerDependencies> \
    eslint-plugin-jsdoc@<versionFromPeerDependencies>
--save-dev
```

Or using `npx`'s shortcut:

```sh
npx install-peerdeps eslint-config-interfaced@latest --dev
```

**Note**: `eslint-plugin-node` and `eslint-plugin-import` are required only for
`interafced/node` and `interfaced/esm` respectively, so if you are not going to use one of these sub configs you can omit them.

2) Add `"extends": "interfaced"` (or one of the sub configs) to your `.eslintrc` file.

```json
{
	"extends": "interfaced",
	"overrides": [{
		"files": "scripts/**",
		"extends": "interfaced/node"
	}]
}
```
