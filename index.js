'use strict';

const resolve = require('./plugins/resolve/plugins');
const start = require('./bot/start');
const read = require('./config/read');
const write = require('./config/write');
const set = require('./config/set');
const push = require('./config/push');
const unset = require('./config/unset');
const add = require('./config/add');
const remove = require('./config/remove');


const [ command, ...args ] = process.argv.slice(2);

const config = read();

if (command === 'start') {
	return start(args[0], resolve(config.plugins), config);
}

if (command === 'add') {
	return write(add(
		args,
		config));
}

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
