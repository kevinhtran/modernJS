// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// Prototypes

// Each object in JS has a prototype and a prototype is an object itself.
// All objects inherit their properties and methods from their prototype.
// object literals, you're inheriting from a prototype called Object.prototype
// when you're dealing with prototypes that were created through a constructor like for instance the person. it's going to be Person.prototype

// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.new() - this.birthday.getTime();
  //   const agedate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYera() - 1970)
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLast?Name) {
  this.lastName = newLastName;
}

const john = new Person('John', Doe', '8-12-90');
const mary = new Person ('Mary', 'Johnson', 'March 20 1978');


console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());



