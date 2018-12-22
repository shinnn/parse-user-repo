# parse-user-repo

[![npm version](https://img.shields.io/npm/v/parse-user-repo.svg)](https://www.npmjs.com/package/parse-user-repo)
[![Build Status](https://travis-ci.com/shinnn/parse-user-repo.svg?branch=master)](https://travis-ci.com/shinnn/parse-user-repo)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/parse-user-repo.svg)](https://coveralls.io/github/shinnn/parse-user-repo?branch=master)

Parse a `username/repo` string

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install parse-user-repo
```

## API

```javascript
import parseUserRepo from 'parse-user-repo';
```

### parseUserRepo(*str*)

*str*: `string` (`user/repo` style repository identifier, for example <https://github.com/holman/spark> → `'holman/spark'`)  
Return: `Object` (`{username: ..., repo: ...}`)

It extracts a username and a repository name from a `user/repo` string and creates an `Object`.

```javascript
parseUserRepo('gohugoio/hugo'); //=> {username: 'gohugoio', repo: 'hugo'}
```

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
