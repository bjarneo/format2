'use strict';

var assert = require('assert');
var format2 = require('../format2');

describe('format2', function() {
    it('should format the string and add input field and spaces based on the input value length', function() {
        assert.equal(format2('{0:2}{0:3}', '#', 'win'), '# win');

        assert.equal(format2('| #{0:2}{0:9} |', '1', 'Song name'), '| #1 Song name |');
    });

    it('should return empty string', function() {
        assert.equal(format2('{0:1}', ''), '');

        assert.equal(format2('{0:0}', '#'), '');

        assert.equal(format2('{0:0}'), '');

        assert.equal(format2(), '');

        assert.equal(format2('{0:1}', 123), '');
        assert.equal(format2('{0:1}', {}), '');
        assert.equal(format2('{0:1}', undefined), '');
        assert.equal(format2('{0:1}', []), '');
    });

    it('should cut the string if it is longer than defined format', function() {
        assert.equal(format2('{0:1}', '##'), '#');
    });
});
