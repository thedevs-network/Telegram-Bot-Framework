'use strict';

module.exports = (path, value, object) => {
	const [ sub ] = path.slice(-1);
	const parent = path.slice(0, -1).reduce(
		(obj, x) =>
			obj[x] = obj[x] || {},
		object);

	const number = Number(value);
	if (!Number.isNaN(number)) {
		parent[sub] = number;
		return object;
	}

	parent[sub] = value;
	return object;
};
