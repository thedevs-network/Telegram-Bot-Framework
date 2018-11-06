'use strict';

/* eslint-disable global-require */

const { join } = require('path');

const builtin = name =>
	join(__dirname, '..', 'builtin', name);

module.exports = name => {
	try {
		return require(builtin(name));
	} catch (err) {
		return require(require.resolve(
			name,
			{ paths: [ process.cwd() ] }));
	}
};
