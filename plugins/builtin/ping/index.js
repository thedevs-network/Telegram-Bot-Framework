'use strict';

module.exports = ({
	Composer
}) =>
	Composer.hears(/ping/, Composer.reply('Pong!'));
