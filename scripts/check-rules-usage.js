const readRules = require('../utils/read-rules');
const Rules = require('eslint/lib/rules');

const allRules = {
	'eslint': mapToObject(new Rules().getAllLoadedRules()),
	'eslint-plugin-interfaced': require('eslint-plugin-interfaced').rules,
	'eslint-plugin-goog': require('eslint-plugin-goog').rules,
	'eslint-plugin-node': require('eslint-plugin-node').rules
};

const usedRules = {
	'eslint': Object.assign(
		readRules('best-practices'),
		readRules('es6'),
		readRules('node.js-and-commonjs'),
		readRules('possible-errors'),
		readRules('strict-mode'),
		readRules('stylistic-issues'),
		readRules('variables'),
	),
	'eslint-plugin-interfaced': readRules('plugins/interfaced'),
	'eslint-plugin-goog': readRules('plugins/goog'),
	'eslint-plugin-node': readRules('plugins/node')
};

Object.keys(allRules)
	.forEach((source) => {
		let rules = Object.keys(allRules[source]);
		let deprecated = rules.filter((rule) => allRules[source][rule].meta && allRules[source][rule].meta.deprecated);

		if (source.startsWith(('eslint-plugin'))) {
			const plugin = source.replace('eslint-plugin-', '');

			rules = rules.map((rule) => `${plugin}/${rule}`);
			deprecated = deprecated.map((rule) => `${plugin}/${rule}`);
		}

		const used = Object.keys(usedRules[source]);
		const usedDeprecated = deprecated.filter((rule) => used.includes(rule));
		const unused = rules.filter((rule) => !used.includes(rule) && !deprecated.includes(rule));

		if (usedDeprecated.length) {
			console.info(`Used ${usedDeprecated.length} deprecated rule(s) from ${source}:`);
			console.info(usedDeprecated.join('\n'));
		}

		if (unused.length) {
			console.info(`Unused ${unused.length} rule(s) from ${source}:`);
			console.info(unused.join('\n'));
		}
	});

/**
 * @param {Map} map
 * @return {Object}
 */
function mapToObject(map) {
	return Array.from(map)
		.reduce((acc, [key, value]) => Object.assign(acc, {[key]: value}), {});
}
