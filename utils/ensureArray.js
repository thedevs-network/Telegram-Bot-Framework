'use strict';

module.exports = x =>
	Array.isArray(x) ? x : [ x ];
