const baseConfig = require('./index');
const baseConfigCopy = JSON.parse(JSON.stringify(baseConfig));

const zombieboxConfig = Object.assign({}, baseConfigCopy, {
	globals: {
		COMPILED: true,
		PLATFORM_NAME: true,
		cuteJS: true,
		goog: true,
		zb: true,
		app: true
	}
});

['goog/no-undeclared-deps', 'goog/no-unused-deps'].forEach((ruleName) => {
	zombieboxConfig.rules[ruleName] = [getSeverity(baseConfig.rules[ruleName]), {
		domains: ['zb']
	}];
});

function getSeverity(rule) {
	return Array.isArray(rule) ? rule[0] : rule;
}

module.exports = zombieboxConfig;
