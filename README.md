format2
======
[![Code Climate](https://codeclimate.com/github/bjarneo/format2/badges/gpa.svg)](https://codeclimate.com/github/bjarneo/format2)
[![Test Coverage](https://codeclimate.com/github/bjarneo/format2/badges/coverage.svg)](https://codeclimate.com/github/bjarneo/format2/coverage)
![Travis](https://travis-ci.org/bjarneo/format2.svg?branch=master)

What
------
This lib is for formatting strings for the CLI. For example if you want to create a list shown in 
the advanced example.

Installation
------
It's available on npm.
```
$ npm install --save format2
```

Basic example
------
```js
var format2 = require('format2');

format2('should replace {0:3} with "#" and two trailing spaces', '#');

Output:
should replace #   with "#" and two trailing spaces

// Should cut the string and replace with only one hashtag
format2('{1:2}', '##');

Output:
#

```


Advanced example
------
```js
var format2 = require('format2');
var formatting = '{0:3} | {0:25} | {0:25} | {0:25}';

console.log(format2(
    formatting,
    '#',
    'Artist',
    'Song',
    'Album'
));
console.log(format2(
    formatting,
    '-'.repeat(3),
    '-'.repeat(24),
    '-'.repeat(24),
    '-'.repeat(24)
));
console.log(format2(
    formatting,
    '1.',
    'Bjarne Oeverli',
    'Let me node you',
    'Best of Node'
));
console.log(format2(
    formatting,
    '2.',
    'Bjarne Oeverli',
    'Node',
    'Best of Node'
));
```
![Output](http://i.imgur.com/dJw4chC.png)

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
