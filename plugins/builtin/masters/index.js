'use strict';

module.exports = (C, masters, plugins) =>
	C.acl(masters,
		C.compose(plugins));
