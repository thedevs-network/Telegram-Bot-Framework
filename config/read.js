'use strict';

const { readFileSync } = require('fs');

const file = require('./file');

module.exports = () =>
	JSON.parse(readFileSync(file));
