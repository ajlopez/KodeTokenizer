
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;

// get lower case letter as word

var tokens = kodetokenizer.getTokens('a');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, 'a');
assert.equal(tokens[0].type, Types.Word);

// get upper case letter as word

var tokens = kodetokenizer.getTokens('A');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, 'A');
assert.equal(tokens[0].type, Types.Word);

// get word and digits

var tokens = kodetokenizer.getTokens('abc123');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, 'abc');
assert.equal(tokens[0].type, Types.Word);
assert.equal(tokens[1].value, '123');
assert.equal(tokens[1].type, Types.Digits);
