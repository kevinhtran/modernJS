// Section 9: Error Handling & Regular Expressions
// Part 1: Error Handling with Try... Catch

// A try block lets us write some code to test for errors
// A catch block lets us handle our own errors
// We can also throw our own errors
// a finally block runs no matter what

const user = {email: "jdoe@gmail.com"};

try {
  // Produce a ReferenceError
  // myFunction();
  null.myFunction();

  // Will produce SyntaxError
  // eval('2+2');

  // Will produce a URIError
  // decodeURIComponent('%');
  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e) {
  console.log(`User ErrorL ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');