// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// Using Object.create

 const personPrototypes = {
   greeting: function() {
     return `Hello there ${this.firstName} ${this.lastName}`
   },
   getsMarried: function(newLastName) {
     this.lastName = newlastName;
   }
 }

 const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: {value: "Brad"},
  lastName: {value: "Traversy"},
  age: {value: 36}
});

console.log(brad);

console.log(brad.greeting());

// this is an alternative way to create object using Object.create method