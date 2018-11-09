'use strict';

const { writeFileSync } = require('fs');

const write = (name, data) =>
	writeFileSync(
		name,
		JSON.stringify(data, null, '\t'));

module.exports = write;
