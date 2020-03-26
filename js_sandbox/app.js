// Section 7:  Asynchronous JavaScript, Ajax & Fetch API
// The Fetch API

// Objective: 
// Recreate the easy HTTP library using Fetch API and some updated standards of ES6 instead of using prototypes.

// Grab the button 1 ID
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
  .then(function(res) {
    return res.text();
  }); // fetch returns promises
  .then(function(data) { // what we have here is a promise within a promise
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err) {
    console.log(err)
  })
}