# Interfaced ESLint config

***

## Usage

1) Install the package

```
npm i eslint-config-interfaced --save-dev
```

2) This config uses custom rules from `eslint-plugin-interfaced` and `eslint-plugin-goog`, so you have to install these packages too

```
npm i eslint-plugin-interfaced eslint-plugin-goog --save-dev
```

3) Add `"extends": "interfaced"` to your .eslintrc file

4) Redefine rules `goog/no-undeclared-deps` and `goog/no-unused-deps` with your application domain and known namespaces (required for fix)

```
'goog/no-undeclared-deps': [
	'error', {
		'domains': ['zb', 'my'],
		'knownNamespaces': ['my.Application', 'My.ServiceContainer']
	}
]
```

```
'goog/no-unused-deps': [
	'error', {
		'domains': ['zb', 'my']
	}
]
```

## Limitations

Currently, ESLint reports errors about invalid JSDoc for methods in interfaces (rule `valid-jsdoc`).
As a workaround you may use JSDoc tag `@virtual` for such methods, e.g.:

```
/**
 * @interface
 */
class IHandler {
	/**
	 * @virtual
	 * @param {Object} params
	 * @return {boolean}
	 */
	handle(params) {}
}
```
