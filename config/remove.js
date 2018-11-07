'use strict';

const init = require('ramda/src/init');
const last = require('ramda/src/last');
const lensPath = require('ramda/src/lensPath');
const omit = require('ramda/src/omit');
const over = require('ramda/src/over');
const uniq = require('ramda/src/uniq');
const without = require('ramda/src/without');

const ensureArray = require('../utils/ensureArray');

module.exports = (name, object) => {
	const n = ensureArray(name);
	const path = init(n);
	const plugin = last(n);
	const lens = lensPath(path);
	const result = over(lens, x => ({
		plugins: uniq(without(plugin, x.plugins || [])),
		...omit([ plugin, 'plugins' ], x)
	}), object);
	return result;
};
