const readRules = require('./utils/read-rules');

module.exports = {
	parser: 'espree',
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		es6: true
	},
	plugins: [
		'interfaced',
		'jsdoc'
	],
	rules: Object.assign(
		readRules('best-practices'),
		readRules('es6'),
		readRules('possible-errors'),
		readRules('strict-mode'),
		readRules('stylistic-issues'),
		readRules('variables'),
		readRules('plugins/interfaced'),
		readRules('plugins/jsdoc')
	),
	settings: {
		jsdoc: {
			mode: 'closure',
			tagNamePreference: {
				'returns': 'return',
				'yields': 'yield',
				'constant': 'const',
				'augments': 'extends'
			},
			preferredTypes: {
				'object': 'Object'
			}
		}
	}
};
