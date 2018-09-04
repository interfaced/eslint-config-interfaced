const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const recursive = require('recursive-readdir-synchronous');

let rules = {};

recursive(path.resolve(__dirname, './rules'))
	.forEach((file) => {
		const filePath = path.resolve(file);

		try {
			rules = Object.assign(rules, yaml.safeLoad(fs.readFileSync(filePath, 'utf8')) || {});
		} catch (e) {
			console.error(`Error reading YAML file: ${filePath}`);
			throw e;
		}
	});

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
	rules
};
