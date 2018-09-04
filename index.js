module.exports = {
	parser: 'espree',
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
