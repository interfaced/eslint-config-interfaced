const path = require('path');

/**
 * @param {string} overridesName
 * @return {Object}
 */
module.exports = (overridesName) => Object.assign(
	{
		extends: [
			path.join(__dirname, '..', 'index.js')
		]
	},
	require(`../overrides/${overridesName}`)
);
