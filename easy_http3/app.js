// Section 7: Asynchronous JavaScript, Ajax & Fetch API
// Custom HTTP Library (Fetch With Async Await) - Part 4

// Objective:
// Take what we did with Easy HTTP 2 and implement with Async & Await

const http = new EasyHTTP;

// Get Users
const users = http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));


// User Data
const data = {
  name: 'John Doe',
  username: 'John Doe',
  email: 'jdoe@gmail.com'
}

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
