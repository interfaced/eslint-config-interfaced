module.exports = {
	env: {
		mocha: true
	},
	globals: {
		expect: true,
		chai: true
	},
	rules: {
		'interfaced/no-unused-expressions': 'off' // For sake of some chai assertions
	}
};
