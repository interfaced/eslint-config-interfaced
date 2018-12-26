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
			'prefer-object-spread': 'off' // Node v6 doesn't support object spread operator
		},
		readRules('node'),
		readRules('plugins/node')
	)
};
