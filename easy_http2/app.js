const http = new EasyHTTP;

// // Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users');
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// User Data
const data = {
  name: 'John Doe',
  username: 'John Doe', 
  email: 'jdoe@gmail.com'
}

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
