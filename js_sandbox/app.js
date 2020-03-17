// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// Contructors & the 'this' keyword


// // Object Literal
// // Fine for a lot of case when you want to deal with just one object/instance
// const brad = {
//   name: 'Brad',
//   age: 30
// }

// Person constructor
// create multiple instances of an object
// we can instantiate
// this keyword is very important and refers to the current instance of the object
// in this case it pertains to the person
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob); // this is a core object that uses a constructor
  this.calculateAge = function() { // a method is a function that's inside of an object
    const diff = Date.now() - this.birthday.getTime();// .now gives us the date timestamp literally right now
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); // getUTCFullYear gives us the data and year according to the universal time
    // realize for Math you don't need to use new in front of it
  }
}

console.log(this); // using this outside, you get the window object

const kevin = new Person('Kevin', 29, '07-07-1990');

console.log(kevin);
console.log(kevin.calculateAge());

