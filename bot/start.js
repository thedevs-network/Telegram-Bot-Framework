'use strict';

const Telegraf = require('telegraf');
const { Composer } = Telegraf;

module.exports = (token, plugins, options) =>
	Object.entries(plugins)
		.reduce(
			(bot, [ name, plugin ]) =>
				bot.use(plugin(
					{ ...options[name] || {}, Composer })),
			new Telegraf(token))
		.startPolling();
