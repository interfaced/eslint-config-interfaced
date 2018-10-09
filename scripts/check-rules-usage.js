const path = require('path');
const fs = require('fs');

const RULE_DEPRECATION_MARK = /deprecated: true/;

const eslintRulesDir = path.join(require.resolve('eslint'), '..', 'rules');
const eslintRuleFiles = fs.readdirSync(eslintRulesDir)
	.filter((file) => !file.startsWith('.'));

const eslintRules = eslintRuleFiles.map((file) => path.parse(file).name);

const deprecatedRules = eslintRuleFiles.reduce((acc, file) => {
	const fileContent = fs.readFileSync(path.join(eslintRulesDir, file), 'utf8');

	if ((RULE_DEPRECATION_MARK).test(fileContent)) {
		acc.push(path.parse(file).name);
	}

	return acc;
}, []);

const usedRules = Object.keys(require('../rules'));
const usedDeprecatedRules = deprecatedRules.filter((rule) => usedRules.includes(rule));
const unusedRules = eslintRules.filter((rule) => !usedRules.includes(rule) && !deprecatedRules.includes(rule));

if (usedDeprecatedRules.length) {
	console.info(`${usedDeprecatedRules.length} deprecated ESLint rules are used:`);
	console.info(usedDeprecatedRules.join('\n'));
}

if (unusedRules.length) {
	console.info(`${unusedRules.length} ESLint rules are unused:`);
	console.info(unusedRules.join('\n'));
} else {
	console.info('All ESLint rules are used');
}
