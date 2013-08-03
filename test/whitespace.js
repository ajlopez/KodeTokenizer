
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;

// space as whitespace

var tokens = kodetokenizer.getTokens(' ');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, ' ');
assert.equal(tokens[0].type, Types.WhiteSpace);
