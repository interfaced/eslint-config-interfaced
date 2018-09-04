const baseConfig = require('./index');

const zombieboxConfig = Object.assign({}, baseConfig, {
	globals: {
		COMPILED: true,
		PLATFORM_NAME: true,
		goog: true,
		zb: true,
		app: true,
		cuteJS: true
	}
});

zombieboxConfig.rules['goog/no-undeclared-deps'] = [baseConfig.rules['goog/no-undeclared-deps'], {
	domains: ['zb']
}];

zombieboxConfig.rules['goog/no-unused-deps'] = [baseConfig.rules['goog/no-unused-deps'], {
	domains: ['zb']
}];

module.exports = zombieboxConfig;
