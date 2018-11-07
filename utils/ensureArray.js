'use strict';

const of = require('ramda/src/of');
const unless = require('ramda/src/unless');

module.exports = unless(Array.isArray, of);
