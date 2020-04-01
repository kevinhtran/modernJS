// Section 11: JavaScript Patterns
// Factory Pattern

// a way of creating an interface for creating objects but we can let subclasses define which classes to instantiate and factory methods are often used in applications to manage and maintain and manipulate collections of objects that are different.But at the same time have many common characteristics and a good example of that would be a member.But at the same time have many common characteristics and a good example of that would be a member.types but still have the same properties and methods.

function MemberFactory(name, type) {
  this.createMember =  function() {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);  
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}
const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}
const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Kevin Tran, 'super'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});