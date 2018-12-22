'use strict';

const test = require('tape');
const parseUserRepo = require('.');

test('parseUserRepo()', t => {
	t.deepEqual(parseUserRepo('a/b'), {username: 'a', repo: 'b'}, 'should parse a user/repo string.');

	t.throws(
		() => parseUserRepo(),
		/^TypeError.*Expected a <string> in the form "username\/repo" e\.g\. isaacs\/minimatch, but got a non-string value undefined\./u,
		'should throw a type error when it takes no arguments.'
	);

	t.throws(
		() => parseUserRepo(1),
		/^TypeError.*but got a non-string value 1 \(number\)\./u,
		'should throw a type error when it takes a non-string argument.'
	);

	t.throws(
		() => parseUserRepo(''),
		/^Error.*but got '' \(empty string\)\./u,
		'should throw an error when it takes an empty string.'
	);

	t.throws(
		() => parseUserRepo('ab'),
		/^Error.*, but got "ab" which includes no slash\./u,
		'should throw an error when the string does not include `/`.'
	);

	t.throws(
		() => parseUserRepo('a//b'),
		/^Error.*, but got "a\/\/b" which includes more than one slash\./u,
		'should throw an error when the string includes multiple `/`.'
	);

	t.throws(
		() => parseUserRepo('a/ b'),
		/^Error.*, but got "a\/ b" which includes a whitespace\./u,
		'should throw an error when the string includes a whitespace.'
	);

	t.throws(
		() => parseUserRepo('a/\tb\n'),
		/^Error.*, but got "a\/\\tb\\n" which includes whitespaces\./u,
		'should throw an error when the string includes whitespaces.'
	);

	t.throws(
		() => parseUserRepo('/'),
		/^Error.*, but got "\/" which includes neither username nor repository name\./u,
		'should throw an error when it takes `/`.'
	);

	t.throws(
		() => parseUserRepo('/b'),
		/^Error.*, but got "\/b" which starts with `\/`, in other words no username is specified\./u,
		'should throw an error when the string starts with `/`.'
	);

	t.throws(
		() => parseUserRepo('a/'),
		/Error.*but got "a\/" which ends with `\/`, in other words no repository name is specified\./u,
		'should throw an error when the string ends with `/`.'
	);

	t.end();
});
