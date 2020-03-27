/**
 * Easy HTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 */

 // ES6 classes
 // no need for constructors

 class EasyHTTP {
   // Make an HTTP GET Request
   get(url) {
     return new Promise((resolve, reject) =>  {
       fetch(url) // fetch itself returns a promise
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
     });
    }

 // Make an HTTP POST Request
post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, { // fetch itself returns a promise
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
  }

// Make an HTTP PUT Request
   put(url, data) {
     return new Promise((resolve, reject) => {
       fetch(url, { // fetch itself returns a promise
         method: 'PUT',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
       })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err));
     });
   }

// Make an HTTP DELETE Request
   delete(url) {
     return new Promise((resolve, reject) => {
       fetch(url, { // fetch itself returns a promise
         method: 'DELETE',
         headers: {
           'Content-type': 'application/json'
         }
       })
         .then(res => res.json())
         .then(() => resolve('Resource deleted.'))
         .catch(err => reject(err));
     });
   }
};

