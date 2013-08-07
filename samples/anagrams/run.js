
var kodetokenizer = require('../..'),
    fs = require('fs');
    
var Types = kodetokenizer.Types;
    
var input = fs.readFileSync(process.argv[2]).toString();

var tokens = kodetokenizer.getTokens(input);

var anagrams = { };
var words = [];

var ntokens = tokens.length;

for (var k = 0; k < ntokens; k++) {
    var token = tokens[k];
    
    if (token.type != Types.Digits && token.type != Types.Word)
        continue;
        
    var word = token.value.toLowerCase();
        
    var anagram = toanagram(word);
    
    if (anagrams[anagram] && anagrams[anagram].indexOf(word) >= 0)
        continue;
        
    var list = anagrams[anagram];
    
    if (!list) {
        anagrams[anagram] = list = [];
        words.push(anagram);
    }
        
    list.push(word);
}

words.forEach(function (k) {
    var anagram = anagrams[k];
    
    if (anagram.length < 2)
        return;
        
    console.log(anagram.join(' '));
});

function toanagram(text) {
    var letters = [];
    
    for (var n in text)
        letters.push(text[n]);
    
    letters.sort();
    
    return letters.join('');
}