
var kodetokenizer = require('..'),
    assert = require('assert');
    
var Types = kodetokenizer.Types;
Types.String = ++Types.MaxValue;

// recognizer

function string(ch, text, position) {
    var length = text.length;
    
    var l = 0;
    var ip = position;
    
    while (position < length && text[position] != ch)
        position++;
        
    var token = { value: text.substring(ip, position), type: Types.String };
        
    if (position < length)
        position++;
        
    return { token: token, position: position };
}

// get double quoted string

var tokens = kodetokenizer.getTokens('"foo"', { processors: { '"': string } });
assert.ok(tokens);
assert.ok(Array.isArray(tokens));
assert.equal(tokens.length, 1);
assert.equal(tokens[0].value, 'foo');
assert.equal(tokens[0].type, Types.String);

