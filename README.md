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

3) Add `extends: "interfaced"` to your .eslintrc file

4) Specify your application domain and known namespaces (required for fixing) by shared settings:

```
settings: {
	domains: ['my'],
	knownNamespaces: ['my.Application', 'my.ServiceContainer']
}
```
