# parse-user-repo

[![NPM version](https://img.shields.io/npm/v/parse-user-repo.svg)](https://www.npmjs.com/package/parse-user-repo)
[![Bower version](https://img.shields.io/bower/v/parse-user-repo.svg)](https://github.com/shinnn/parse-user-repo/releases)
[![Build Status](https://travis-ci.org/shinnn/parse-user-repo.svg)](https://travis-ci.org/shinnn/parse-user-repo)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-user-repo.svg)](https://coveralls.io/github/shinnn/parse-user-repo?branch=master)
[![devDependency Status](https://david-dm.org/shinnn/parse-user-repo/dev-status.svg)](https://david-dm.org/shinnn/parse-user-repo#info=devDependencies)

Parse a `username/repo` string

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install parse-user-repo
```

#### [Bower](http://bower.io/)

```
bower install parse-user-repo
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/parse-user-repo/master/browser.js)

## API

### parseUserRepo(*str*)

*str*: `String` (`user/repo` style repository identifier, for example <https://github.com/holman/spark> → `'holman/spark'`)  
Return: `Object` (`{username: ..., repo: ...}`)

It extracts a username and a repository name from a `user/repo` string and creates an object.

```javascript
parseUserRepo('spf13/hugo');
//=> {username: 'spf13', repo: 'hugo'}
```

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
