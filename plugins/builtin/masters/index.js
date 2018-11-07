'use strict';

module.exports = (C, opts, plugins) =>
	C.acl(opts.masters,
		C.compose(plugins));
