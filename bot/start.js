'use strict';

const Telegraf = require('telegraf');

module.exports = (token, plugins) =>
	new Telegraf(token)
		.use(...plugins)
		.startPolling();
