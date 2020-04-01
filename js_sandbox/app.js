// Section 11: JavaScript Patterns
// Module & Revealing Module Pattern

// Basic Structure
// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeTest: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
  UICtrl.changeText();

Console.log(UICtrl.text);


// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    // get: get
  }
})();

ItemCtrl.add({id: 1, name:  'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));


//So that's one of the main differences between the revealing module and the standard module pattern is that we're mapping or we're returning an object literal that directly reveals methods that are inside of the module