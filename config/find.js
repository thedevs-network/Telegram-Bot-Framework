'use strict';

const { join } = require('path');
const { existsSync } = require('fs');

const find = (path, name) => {
	const file = join(path, name);
	return existsSync(file)
		? file
		: {};
};

module.exports = find;
