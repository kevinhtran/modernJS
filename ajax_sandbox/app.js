// Section 7: Asynchronous JavaScript, Ajax, & Fetch API
// [Part 4]: Working with Ajax & JSON

// Objective:
// Work with JSON instead of just plain text
// JSON - JavaScript Object Notation
// Very similar to JS objects

document.getElementById('button').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseTest);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}