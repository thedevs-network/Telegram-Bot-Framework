'use strict';

const { join } = require('path');
const { existsSync } = require('fs');

const builtin = x =>
	join(__dirname, 'builtin', x);

const resolve = (path, x) => {
	const builtinX = builtin(x);
	return existsSync(builtinX) ||
		existsSync(builtinX + '.js') ||
		existsSync(builtinX + '.json')
		? builtinX
		: require.resolve(x, {
			paths: [ path ]
		});
};

module.exports = resolve;
