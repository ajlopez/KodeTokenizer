
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;

// get letter as word

var tokens = kodetokenizer.getTokens('a');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, 'a');
assert.equal(tokens[0].type, Types.Word);
