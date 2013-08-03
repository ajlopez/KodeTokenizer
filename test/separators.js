
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;

// get , as separator

var tokens = kodetokenizer.getTokens(',', { separators: [ ',' ] });
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, ',');
assert.equal(tokens[0].type, Types.Separator);

// get { } as separators

var tokens = kodetokenizer.getTokens('{}', { separators: [ ',', '{', '}' ] });
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 2);
assert.equal(tokens[0].value, '{');
assert.equal(tokens[0].type, Types.Separator);
assert.equal(tokens[1].value, '}');
assert.equal(tokens[1].type, Types.Separator);
