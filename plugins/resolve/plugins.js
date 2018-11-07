'use strict';

const o = require('ramda/src/o');
const reduce = require('ramda/src/reduce');

const ensureArray = require('../../utils/ensureArray');
const plugin = require('./plugin');

module.exports = o(
	reduce((acc, name) =>
		({ ...acc, [name]: plugin(name) }), {}),
	ensureArray);
