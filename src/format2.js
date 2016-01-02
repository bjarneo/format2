'use strict';

var repeat = require('string-repeat');
var isString = require('lodash.isstring');

// So magic
module.exports = function format2(syntax) {
    if (!isString(syntax)) {
        return '';
    }

    if (arguments.length <= 1) {
        return '';
    }

    // Arrify
    var args = Array.prototype.slice.call(arguments);

    // Remove first element
    args.shift();

    // Extract '{***}' from the string
    var matches = syntax.match(/{([^}]+)}/g);

    // Remove curly brackets and save it to a new array
    var match = matches.join('').replace(/}/, '').split('{');
    match.shift();

    // Build the string
    for (var i = 0; i < match.length; i++) {
        if (match[i].length < 1 || !isString(args[i]) || args[i].length < 1) {
            return '';
        }

        var output = '';
        var innerSyntax = match[i].split(':');
        var availableSpace = parseInt(innerSyntax[1], 10) - parseInt(innerSyntax[0], 10);

        // Cut a string if it's longer than defined length
        if (args[i].length > availableSpace) {
            args[i] = args[i].substr(0, availableSpace);
        }

        output += args[i];

        // Calculate how many spaces to add
        var spaces = availableSpace - args[i].length;
        if (spaces > 0) {
            output += repeat(' ', spaces);
        }

        // Replace matches in the string with generated output
        syntax = syntax.replace(matches[i], output);
    }

    return syntax;
};
