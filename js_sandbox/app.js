// Section 11: JavaScript Patterns
// Observer Pattern

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push();
    console.log('You are now subscribed to ${fn.name}'); 
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function() {
      if(item !== fn) {
        return item;
      }
    });
    console.log('You are now unsubscribed from ${fn.name}');
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});
// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}