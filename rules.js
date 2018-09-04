const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const recursive = require('fs-readdir-recursive');

const rulesDir = path.join(__dirname, 'rules');

module.exports = recursive(rulesDir)
	.reduce((acc, file) => {
		try {
			return Object.assign(acc, yaml.safeLoad(fs.readFileSync(path.join(rulesDir, file), 'utf8')) || {});
		} catch (e) {
			throw new Error(`Error reading ${file}: ${e}`);
		}
	}, {});
