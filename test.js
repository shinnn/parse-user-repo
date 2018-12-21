'use strict';

const test = require('tape');
const parseUserRepo = require('.');

test('parseUserRepo()', t => {
  t.deepEqual(parseUserRepo('a/b'), {username: 'a', repo: 'b'}, 'should parse a user/repo string.');

  t.throws(
		() => parseUserRepo(),
		/^TypeError.*undefined is not a string\. Expected a string in the form of "username\/repo"\./u,
		'should throw a type error when it takes no arguments.'
	);

  t.throws(
		() => parseUserRepo(1),
		/^TypeError.*1 is not a string\. .*e\.g\. isaacs\/minimatch/u,
		'should throw a type error when it takes a non-string argument.'
	);

  t.throws(
		() => parseUserRepo(''),
		/^Error.*Expected a string in the form of "username\/repo", but received an empty string\./u,
		'should throw an error when it takes an empty string.'
	);

  t.throws(
		() => parseUserRepo('ab'),
		/^Error.*ab doesn't include `\/`\. /u,
		'should throw an error when the string does not include `/`.'
	);

  t.throws(
		() => parseUserRepo('a//b'),
		/^Error.*a\/\/b includes more than one slash\. /u,
		'should throw an error when the string includes multiple `/`.'
	);

  t.throws(
		() => parseUserRepo('a/ b'),
		/^Error.*a\/ b includes a white space\. /u,
		'should throw an error when the string includes a white space.'
	);

  t.throws(
		() => parseUserRepo('/'),
		/^Error.*The string includes neither username nor repository name\. /u,
		'should throw an error when it takes `/`.'
	);

  t.throws(
		() => parseUserRepo('/b'),
		/^Error.*\/b starts with `\/`, in other words no username is specified\. /u,
		'should throw an error when the string starts with `/`.'
	);

  t.throws(
		() => parseUserRepo('a/'),
		/Error.*a\/ ends with `\/`, in other words no repository name is specified\. /u,
		'should throw an error when the string ends with `/`.'
	);

  t.end();
});
