const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const rulesDir = path.join(__dirname, '..', 'rules');

/**
 * @param {string} rulesSetName
 * @return {Object}
 */
module.exports = (rulesSetName) => {
	const filePath = path.join(rulesDir, `${rulesSetName}.yaml`);

	try {
		return yaml.safeLoad(fs.readFileSync(filePath, 'utf8')) || {};
	} catch (e) {
		throw new Error(`Error reading ${rulesSetName}: ${e}`);
	}
};
