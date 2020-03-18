// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// Prototypal Inheritance

// Objective: One object type inherit from another

// Person constructor
// Create a person and inherit it's cusomter/prototype

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.contructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = functoin(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

console.log(customer.greeting());

// any prototype method that we add to the person will now be accessible through the customer