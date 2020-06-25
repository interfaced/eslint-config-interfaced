const readRules = require('../utils/read-rules');

module.exports = {
	plugins: [
		'node'
	],
	env: {
		node: true
	},
	rules: Object.assign(
		{
			'no-console': 'off', // Console using is ok in Node
		},
		readRules('plugins/node')
	)
};
