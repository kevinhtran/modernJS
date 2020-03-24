// Section 7: Asynchronous JavaScript, Ajax, & Fetch API
// [Part 6]: Callback Functions
// A callback is a function that's passed in as a parameter to another function and then it's ran inside the function body

// Objective:
// Create a callback function and see what they do behind the scenes
// mimic the actions of creating a blog post on a server or through an API/database


const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost() {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);