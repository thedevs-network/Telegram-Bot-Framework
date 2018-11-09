'use strict';

const assocPath = require('ramda/src/assocPath');
const intersperse = require('ramda/src/intersperse');
const last = require('ramda/src/last');

const configFromEnv = (prefix, delimiter, env) =>
	Object.entries(env)
		.reduce((conf, [ name, value ]) => {
			if (!name.startsWith(prefix + delimiter)) {
				return conf;
			}
			const path = name.split(delimiter).slice(1);
			return path.length === 1
				? assocPath(
					[ 'options', ...path ],
					value,
					conf)
				: assocPath([
					'pluginOptions',
					...intersperse(
						'pluginOptions',
						path.slice(0, -1)),
					'options',
					last(path)
				], value, conf);
		}, {});

module.exports = configFromEnv;
