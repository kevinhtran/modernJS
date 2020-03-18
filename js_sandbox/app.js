// Section 5: Object Oriented JavaScript - ES5 - ES2015(ES6)
// ES6 Classes
// Classes are considered syntactic sugar or convenience syntax because we're just changing the way we write them and not the way that it works under the hood

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
      return  `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) { // static method. standalone functions
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary.greeting());
console.log(mary.calculateAge());
console.log(Person.addNumbers(1,2));
