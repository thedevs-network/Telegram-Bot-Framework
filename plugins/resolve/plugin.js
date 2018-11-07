'use strict';

const { join } = require('path');

const o = require('ramda/src/o');
const partial = require('ramda/src/partial');
const partialRight = require('ramda/src/partialRight');
const tryCatch = require('ramda/src/tryCatch');


/* eslint-disable global-require */

const builtin = partial(join, [ __dirname, '..', 'builtin' ]);
const requireBuiltin = o(require, builtin);
const requireRelative = o(require, partialRight(
	require.resolve,
	[ { paths: [ process.cwd() ] } ]));

module.exports = tryCatch(
	requireBuiltin,
	requireRelative);
