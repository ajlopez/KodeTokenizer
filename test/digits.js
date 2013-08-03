
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;
    
// get digit

var tokens = kodetokenizer.getTokens('1');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '1');
assert.equal(tokens[0].type, Types.Digits);

