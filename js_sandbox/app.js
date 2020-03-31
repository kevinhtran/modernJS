// Section 9: Error Handling & Regular Expressions
// [Part 3]: Character Sets & Quantifiers

// Objective: 


let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times

re = /gre?a?y/i; // Optional character
re = /gre?a?y?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be an G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2}o/i; // Must occur at least {m} times

// Parenthesis () - Grouping
re = /([0-9]x)/{3} // 3x3x3

// String to match
const str = 'Hello';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT Match ${re.source}`);
  }
}

reTest(re, str);