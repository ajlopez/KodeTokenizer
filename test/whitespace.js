
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

// tab as whitespace

var tokens = kodetokenizer.getTokens('\t');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '\t');
assert.equal(tokens[0].type, Types.WhiteSpace);

// two spaces as whitespace

var tokens = kodetokenizer.getTokens('  ');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '  ');
assert.equal(tokens[0].type, Types.WhiteSpace);

// tab and space as whitespace

var tokens = kodetokenizer.getTokens('\t ');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, '\t ');
assert.equal(tokens[0].type, Types.WhiteSpace);

// space and tab as whitespace

var tokens = kodetokenizer.getTokens(' \t');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, ' \t');
assert.equal(tokens[0].type, Types.WhiteSpace);

// whitespace and word

var tokens = kodetokenizer.getTokens(' \tabc');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, ' \t');
assert.equal(tokens[0].type, Types.WhiteSpace);
assert.equal(tokens[1].value, 'abc');
assert.equal(tokens[1].type, Types.Word);

// whitespace and digits

var tokens = kodetokenizer.getTokens(' \t123');
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, ' \t');
assert.equal(tokens[0].type, Types.WhiteSpace);
assert.equal(tokens[1].value, '123');
assert.equal(tokens[1].type, Types.Digits);

