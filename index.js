module.exports = {
	parser: 'espree',
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	plugins: [
		'interfaced',
		'goog'
	],
	rules: require('./rules')
};
