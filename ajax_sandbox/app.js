// Section 7: Asynchronous JavaScript, Ajax, & Fetch API
// [Part 4]: Working with Ajax & JSON

// Objective:
// Work with JSON instead of just plain text
// JSON - JavaScript Object Notation
// Very similar to JS objects

document.getElementById('button').addEventListener('click', loadData);

// we have an event listener, we click it then it calls this function
function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  // specify what type of request we want to make or the URL/file to want to make it to
  // GET request is read the file or read the URL
  xhr.open('GET', 'data.txt', true); // we want to make it asynchronous so the 3rd parameter is going to be true

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  // keep in mind that, Ajax/xhr are more complicated than fetch. Fetch is more modern
  // .onload takes you directly to your readyState value
  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText); // this is the data that's included in the data.txt file
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`; // will allow data.txt content to display on the screen
    }
  }

  // this is an older way to write it
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 & this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // this will only run in case something goes wrong
  xhr.onerror = function() {
    console.log('Request error...');
  }


  // finalize everything you have to use .send
  xhr.send();


  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}