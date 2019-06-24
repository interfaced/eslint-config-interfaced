const chalk = require('chalk');
const readRules = require('../utils/read-rules');
const lazyEslintRules = require('eslint/lib/rules');

const allRules = {
	'eslint': mapToObject(lazyEslintRules),
	'eslint-plugin-interfaced': require('eslint-plugin-interfaced').rules,
	'eslint-plugin-node': require('eslint-plugin-node').rules,
	'eslint-plugin-import': require('eslint-plugin-import').rules
};

const usedRules = {
	'eslint': Object.assign(
		readRules('best-practices'),
		readRules('es6'),
		readRules('node'),
		readRules('possible-errors'),
		readRules('strict-mode'),
		readRules('stylistic-issues'),
		readRules('variables'),
	),
	'eslint-plugin-interfaced': readRules('plugins/interfaced'),
	'eslint-plugin-node': readRules('plugins/node'),
	'eslint-plugin-import': readRules('plugins/import')
};

for (const [source, rulesMap] of Object.entries(allRules))  {
	let ruleNames = Object.keys(rulesMap);
	let deprecated = ruleNames.filter((rule) => allRules[source][rule].meta && allRules[source][rule].meta.deprecated);

	if (source.startsWith(('eslint-plugin'))) {
		const plugin = source.replace('eslint-plugin-', '');

		ruleNames = ruleNames.map((rule) => `${plugin}/${rule}`);
		deprecated = deprecated.map((rule) => `${plugin}/${rule}`);
	}

	const used = Object.keys(usedRules[source]);
	const usedDeprecated = deprecated.filter((rule) => used.includes(rule));
	const unused = ruleNames.filter((rule) => !used.includes(rule) && !deprecated.includes(rule));

	if (usedDeprecated.length) {
		console.info(`\nConfig is using ${usedDeprecated.length} deprecated rule(s) from ${source}:`);
		for (const rule of usedDeprecated) {
			console.info(` • ${chalk.red(rule)}`);
		}
	}

	if (unused.length) {
		console.info(`\nConfig is not using ${unused.length} rule(s) from ${source}:`);
		for (const rule of unused) {
			console.info(` + ${chalk.green(rule)}`);
		}
	}
}

/**
 * @param {Map} map
 * @return {Object}
 */
function mapToObject(map) {
	return Array.from(map)
		.reduce((acc, [key, value]) => Object.assign(acc, {[key]: value}), {});
}
