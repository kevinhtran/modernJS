// Section 11: JavaScript Patterns
// Mediator Pattern

const User = function(name) {
  this.name = name;
  this.chatroom = null;
 
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this.to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(messsage, from, to) {
      if(to) {
        // single user message
        to.receive(message, from);
      } else {
        // mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message,from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const brad = new User('Jeff');
const brad = new User('Kevin');

const chatroom = new Chatroom();

chatroom.resgister(brad);
chatroom.resgister(jeff);
chatroom.resgister(kevin);

brad.send('Hello Kevin', kevin);
kevin.send('Hello Brad, you are cool', brad);
jeff.send('Hello everyone', brad, jeff, kevin);