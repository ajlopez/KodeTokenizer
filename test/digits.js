
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
    
// get digits

var tokens = kodetokenizer.getTokens('123');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '123');
assert.equal(tokens[0].type, Types.Digits);

// get digits and word

var tokens = kodetokenizer.getTokens('123abc');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, '123');
assert.equal(tokens[0].type, Types.Digits);
assert.equal(tokens[1].value, 'abc');
assert.equal(tokens[1].type, Types.Word);
