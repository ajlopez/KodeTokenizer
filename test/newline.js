
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;

// carriage return as newline

var tokens = kodetokenizer.getTokens('\r');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '\r');
assert.equal(tokens[0].type, Types.NewLine);

// new line as newline

var tokens = kodetokenizer.getTokens('\n');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '\n');
assert.equal(tokens[0].type, Types.NewLine);

// carriage return new line as newline

var tokens = kodetokenizer.getTokens('\r\n');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '\r\n');
assert.equal(tokens[0].type, Types.NewLine);

// carriage return new line twice

var tokens = kodetokenizer.getTokens('\r\n\r\n');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, '\r\n');
assert.equal(tokens[0].type, Types.NewLine);
assert.equal(tokens[1].value, '\r\n');
assert.equal(tokens[1].type, Types.NewLine);
