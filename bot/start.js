'use strict';

const omit = require('ramda/src/omit');

const Telegraf = require('telegraf');
const { Composer } = Telegraf;

module.exports = (token, plugins, options) =>
	Object.entries(plugins)
		.reduce(
			(bot, [ name, plugin ]) =>
				bot.use(
					plugin(
						Composer,
						(options[name].plugins || []).reduce(
							(obj, pluginName) =>
								omit([ pluginName ], obj),
							omit([ 'plugins' ], options[name])),
						options[name].plugins || [],
						{})),
			new Telegraf(token))
		.startPolling();
