// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// Sub Classes - Inheritence in ES6 classes

// class that you're creating
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

// class that you're extending
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // calls the parent class constructor, you have to pass in whatever parameters that was in the parent class and anything extra is just in this sub class

    this.phone = phone;
    this.membership  = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

// instantiate a new customer
const john = new Customer('John', 'Doe', '555-555-5555');

console.log(john);
console.log(john.greeting); 
console.log(Customer.getMembershipCost()); // Since it's a static method, you use the actual class name. It's only one way because you didn't extend customer, you extended person.

