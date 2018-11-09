'use strict';

const { readFileSync } = require('fs');

const read = file =>
	typeof file === 'string'
		? JSON.parse(readFileSync(file))
		: file;

module.exports = read;
