'use strict';

const resolve = require('../../resolve/plugins');

module.exports = ({
	masters,
	plugins,
	Composer
}) =>
	Composer.optional(
		ctx =>
			masters.includes(ctx.from.id),
		Composer.compose(
			Object.entries(
				resolve(
					Object.keys(
						plugins || {})))
				.map(
					([ name, plugin ]) =>
						plugin({ ...plugins[name], Composer }))));
