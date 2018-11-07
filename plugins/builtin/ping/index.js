'use strict';

module.exports = C =>
	C.hears(/ping/,
		C.reply('Pong!'));
