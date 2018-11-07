'use strict';

const { join } = require('path');

const bind = require('ramda/src/bind');
const nthArg = require('ramda/src/nthArg');
const o = require('ramda/src/o');
const partial = require('ramda/src/partial');
const partialRight = require('ramda/src/partialRight');
const tryCatch = require('ramda/src/tryCatch');


/* eslint-disable global-require */

const builtin = partial(join, [ __dirname, '..', 'builtin' ]);
const requireBuiltin = o(require, builtin);
const requireRelative = o(require, partialRight(
	bind(require.resolve, require),
	[ { paths: [ process.cwd() ] } ]));

module.exports = tryCatch(
	requireBuiltin,
	o(requireRelative, nthArg(1)));
