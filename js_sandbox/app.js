// Section 7:  Asynchronous JavaScript, Ajax & Fetch API
// ES6 Promises

// Objective: Understanding what a Promise is

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function createPost(post) {
  return new Promise(function (resolve, reject) { // resolve is what we want to call when we're done with what we're doing // reject we want to call if there is some error we want to throw.
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(function(err) {
  console.log(err);
})