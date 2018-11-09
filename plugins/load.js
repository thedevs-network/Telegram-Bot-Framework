'use strict';

const resolve = require('./resolve');

const load = (path, name, plugin, Composer, utils) => {
	/* eslint-disable global-require */
	const loaded = require(resolve(path, name));
	return typeof loaded === 'function'
		? loaded(
			Composer,
			plugin.options || {},
			(plugin.plugins || []).map(pl =>
				load(
					path,
					pl,
					(plugin.pluginOptions || {})[pl] || {},
					Composer,
					utils)),
			utils)
		: (() => {
			throw new TypeError('Not implemented yet');
		})();
};

module.exports = load;
