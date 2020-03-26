// Section 7: Asynchronous JavaScript, Ajax, & Fetch API
// Arrow Functions


// previous way to log
const say sayHello = function() {
  console.log('hello');
};

// ES6 way
const sayHello = () => {
  console.log('Hello');
};

// One line function does not need braces
const sayHello = () => console.log("Hello");
// sayHello();



// previous way to return
const sayHello = function () {
  return 'Hello';
};

// One line returns
const sayHello = () => 'Hello';
// console.log(sayHello());



// Return object
// we get this as undefined when using objects
const sayHello = () => { msg: 'Hello' };

// so you have to wrap it in parenthesis like this:
const sayHello = () => ({ msg: 'Hello' });
// console.log(sayHello());



// Single parameter does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Kevin);

// Multiple parameters need parenthesis
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Kevin', 'Tran');



// Using enumerable like .map
const users = ['Kevin', 'John', 'Ginny', 'Khalil'];

// Previous way
// .map returns an array for you
const nameLengths = users.map(function(name) {
  return name.length;
});

// Shorter
const nameLength = users.map((name) => {
  return name.length;
});

// Shortest
const nameLengths = users.map(name => name.length);
// console.log(nameLengths);