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
var repeat = require('string-repeat');
var format2 = require('format2');

var space = '{0:3} | {0:25} | {0:25} | {0:25}';

console.log(format2(
    space,
    '#',
    'Artist',
    'Song',
    'Album'
));
console.log(format2(
    space,
    repeat('-', 3),
    repeat('-', 24),
    repeat('-', 24),
    repeat('-', 24)
));
console.log(format2(
    space,
    '1.',
    'Bjarne Oeverli',
    'Let me node you',
    'Best of Node'
));
console.log(format2(
    space,
    '2.',
    'Bjarne Oeverli',
    'Node',
    'Best of Node'
));

Output:
#   | Artist                    | Song                      | Album                   
--- | ------------------------  | ------------------------  | ------------------------
1.  | Bjarne Oeverli            | Let me node you           | Best of Node            
2.  | Bjarne Oeverli            | Node                      | Best of Node            
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
