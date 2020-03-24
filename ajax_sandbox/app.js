// Section 7: Asynchronous JavaScript, Ajax, & Fetch API
// [Part 5]: Date From an External API - Chuck Norris Project

// Objective:
// Fetch data from an external API using Ajax
// Using a simple API that takes a GET request formatted as a certain URL and return random Chuck Norris Jokes (lol)


document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>'; // append using +=
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}