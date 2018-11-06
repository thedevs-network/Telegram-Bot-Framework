'use strict';

const append = require('ramda/src/append');
const init = require('ramda/src/init');
const last = require('ramda/src/last');
const lensPath = require('ramda/src/lensPath');
const uniq = require('ramda/src/uniq');
const omit = require('ramda/src/omit');
const over = require('ramda/src/over');

const ensureArray = require('../utils/ensureArray');

module.exports = (name, object) => {
	const n = ensureArray(name);
	const path = init(n);
	const plugin = last(n);
	const lens = lensPath(path);
	const result = over(lens, x => ({
		plugins: uniq(append(plugin, x.plugins || [])),
		...omit([ plugin, 'plugins' ], x),
		[plugin]: x[plugin] || {}
	}), object);
	return result;
};
