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
		'interfaced'
	],
	rules: Object.assign(
		readRules('best-practices'),
		readRules('es6'),
		readRules('possible-errors'),
		readRules('strict-mode'),
		readRules('stylistic-issues'),
		readRules('variables'),
		readRules('plugins/interfaced')
	)
};
