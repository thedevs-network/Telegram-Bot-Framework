'use strict';

const { writeFileSync } = require('fs');

const file = require('./file');

module.exports = config =>
	writeFileSync(file, JSON.stringify(config, null, '\t'));
