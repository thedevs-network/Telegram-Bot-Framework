'use strict';

/* eslint-disable global-require */

const load = require('./config/load');


const [ command, ...args ] = process.argv.slice(2);

const config = load(
	__dirname,
	process.env,
	'plugins.json');

if (command === 'start') {
	const Composer = require('telegraf/composer');
	const start = require('./bot/start');
	const load = require('./plugins/load');
	return start(
		args[0] || process.env.TOKEN || config.options.token,
		config.plugins.map(plugin =>
			load(
				process.cwd(),
				plugin,
				(config.pluginOptions || {})[plugin] || {},
				Composer,
				{})));
}

const write = require('./config/write');

if (command === 'add') {
	const add = require('./command/add');
	return write('plugins.json', add(config, args));
}

// TODO below

if (command === 'remove') {
	return write(remove(
		args,
		config));
}

if (command === 'set') {
	return write(set(
		args.slice(0, -1),
		...args.slice(-1),
		config));
}

if (command === 'push') {
	return write(push(
		args.slice(0, -1),
		...args.slice(-1),
		config));
}

if (command === 'unset') {
	return write(unset(
		args,
		config));
}
