'use strict';

const plugin = require('./plugin');

const ensureArray = require('../../utils/ensureArray');

module.exports = plugins =>
	ensureArray(plugins).reduce(
		(acc, name) =>
			({ ...acc, [name]: plugin(name) }),
		{});
