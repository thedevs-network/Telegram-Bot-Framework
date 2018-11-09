'use strict';

const mergeDeepRight = require('ramda/src/mergeDeepRight');

const find = require('./find');
const read = require('./read');
const configFromEnv = require('./env');

const load = (dir, env, name) => {
	const file = find(dir, name);
	const data = read(file);
	return mergeDeepRight(data, configFromEnv('G2', '_', env));
};

module.exports = load;
