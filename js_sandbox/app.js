// Section 7:  Asynchronous JavaScript, Ajax & Fetch API
// The Fetch API

// Objective: 
// Recreate the easy HTTP library using Fetch API and some updated standards of ES6 instead of using prototypes.

// Grab the button 1 ID that links to the text file
document.getElementById('button1').addEventListener('click', getText);

// Grab the button 2 ID that links to the JSON file
document.getElementById('button2').addEventListener('click', getJson);

// Grab the button 3 ID that links to the api file
document.getElementById('button3').addEventListener('click', getExternal);

// get local text file data
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

// get local JSON data
function getJson() {
  fetch('post.json')
    .then(function (res) {
      return res.json();
    }); // fetch returns promises
  .then(function (data) { // what we have here is a promise within a promise
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err)
    })
}

// get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    }); // fetch returns promises
  .then(function (data) { // what we have here is a promise within a promise
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err)
    })
}