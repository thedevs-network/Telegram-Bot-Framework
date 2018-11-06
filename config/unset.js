'use strict';

module.exports = (path, object) => {
	const [ sub ] = path.slice(-1);
	const parent = path.slice(0, -1).reduce(
		(obj, x) =>
			obj[x] = obj[x] || {},
		object);
	delete parent[sub];
	return object;
};
