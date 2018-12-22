'use strict';

var appendType = require('append-type');

/*!
 * parse-user-repo | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/parse-user-repo
*/

var ERR = 'Expected a <string> in the form "username/repo" e.g. isaacs/minimatch';

module.exports = function parseUserRepo(str) {
	if (typeof str !== 'string') {
		throw new TypeError(ERR + ', but got a non-string value ' + appendType(str) + '.');
	}

	if (str.length === 0) {
		throw new Error(ERR + ', but got \'\' (empty string).');
	}

	if (str === '/') {
		throw new Error(ERR + ', but got ' + JSON.stringify(str) + ' which includes neither username nor repository name.');
	}

	var splitted = str.split('/');
	var spaces = str.match(/\s/g);

	if (spaces !== null) {
		throw new Error(ERR +
			', but got ' +
			JSON.stringify(str) +
			' which includes ' +
			(spaces.length === 1 ? 'a whitespace.' : 'whitespaces.'));
	}

	if (splitted.length === 1) {
		throw new Error(ERR + ', but got ' + JSON.stringify(str) + ' which includes no slash.');
	}

	if (splitted.length !== 2) {
		throw new Error(ERR + ', but got ' + JSON.stringify(str) + ' which includes more than one slash.');
	}

	if (splitted[0].length === 0) {
		throw new Error(ERR + ', but got ' + JSON.stringify(str) + ' which starts with `/`, in other words no username is specified.');
	}

	if (splitted[1].length === 0) {
		throw new Error(ERR + ', but got ' + JSON.stringify(str) + ' which ends with `/`, in other words no repository name is specified.');
	}

	return {
		username: splitted[0],
		repo: splitted[1]
	};
}
