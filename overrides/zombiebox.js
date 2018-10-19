const readRules = require('../utils/read-rules');

module.exports = {
	plugins: [
		'goog'
	],
	settings: {
		domains: ['zb']
	},
	globals: {
		COMPILED: true,
		PLATFORM_NAME: true,
		cuteJS: true,
		goog: true,
		zb: true,
		app: true
	},
	rules: readRules('plugins/goog')
};
