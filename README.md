# KodeTokenizer

Generic source code tokenizer. WIP.

## Installation

Via npm on Node:

```
npm install kodetokenizer
```


## Usage

Reference in your program:

```js
var kt = require('kodetokenizer');
```

Given a text, get its content as tokens:
```js
var tokens = kt.getTokens("var myvar = 13;");
```
The result is an array of tokens, each one is a plain JavaScript object with:

- `value`: text
- `type`: a number, from kt.Types

The types are:

- `kt.Types.Word`: a sequence of letters
- `kt.Types.Digits`: a sequence of digits
- `kt.Types.WhiteSpace`: a sequence of whitespace
- `kt.Types.NewLine`: a new line: `\n`, `\r\n` or `\r`
- `kt.Types.Symbol`: a sequence of symbol (not a letter, digit, whitespace, new line or separator)
- `kt.Types.Unknown`
- `kt.Types.Separator`: a character separator

The separators are "language dependend", so you must indicate them in an option object parameter, ie:

```js
var tokens = kt.getTokens("myfun(1,2,3);", { separators: ['(', ')', '{', '}', ',', ';' ]);
```

You can add processors: functions that given an initial character, returns a token:

```js
function stringProcessor(ch, text, position) { 
    //...
}

var tokens = kt.getTokens("myfun('foo', 'bar');", { processors: { '#': stringProcessor } });
```

The parameter `ch` is the detected character. `position` points to a character in `text`, the next unprocessed one.

The processor can return:

- `null`: no token detected, so the tokenizer takes control again.
- `{ position: anumber, token: atoken }`: where `position` is the new unprocessed char position in text,
and `token` is the token to be used

See `test/string.js` as an example of processor. Note that you can use;

```js
var Types = kt.Types;
Types.String = ++Types.MaxValue;
```

to add your own token types.

## Development

```
git clone git://github.com/ajlopez/KodeTokenizer.git
cd KodeTokenizer
npm install
npm test
```

## Samples

TBD

## Versions

- 0.0.1: Published

## References

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/KodeTokenizer) and submit
[pull requests](https://github.com/ajlopez/KodeTokenizer/pulls) — contributions are
welcome

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
