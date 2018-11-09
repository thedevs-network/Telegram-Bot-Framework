'use strict';

const head = require('ramda/src/head');
const uniq = require('ramda/src/uniq');

const add = (c, path) =>
	path.length <= 1
		? {
			options: (c || {}).options || {},
			pluginOptions: (c || {}).pluginOptions || {},
			plugins: uniq([
				...(c || {}).plugins || [],
				...head(path) ? [ head(path) ] : []
			])
		} : {
			options: (c || {}).options || {},
			pluginOptions: {
				...(c || {}).pluginOptions || {},
				[head(path)]: add(
					((c || {}).pluginOptions || {})[head(path)] || {},
					path.slice(1))
			},
			plugins: uniq((c || {}).plugins || [])
		};

module.exports = add;
