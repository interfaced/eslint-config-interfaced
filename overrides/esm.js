const readRules = require('../utils/read-rules');

module.exports = {
	plugins: [
		'import'
	],
	parserOptions: {
		sourceType: 'module'
	},
	rules: readRules('plugins/import')
};
