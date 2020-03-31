// Section 9: Error Handling & Regular Expressions
// Regular Expression [Part 1] - Evaluation Functions

// A regular expression is basically used to describe a pattern of characters
// Used to pattern matching or searching.
// Commonly used for validation as well as pulling things out of a body of text or a body of characters.
// Email address, phone numbers, social security, things that have certain patterns in their formatting

let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search


console.log(re); // => /hello/
console.log(re.source); // => hello

exec() - Return result in an array or null
const result = re.exec('hello world');

console.log(result);
console.log(result[0]); // hello
console.log(result.index); // 0
console.log(result.input); // hello world

// test() - Returns true or false
const result = re.test('Hello');
console.log(result);

match() - Return result array or null
const str = 'Hello There';
const result = str.match(re);
console.log(result);

serach() - Returns index of the first match if not found returns -1
const str = 'Hello There';
const result = str.search(re);
console.log(result);

replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);