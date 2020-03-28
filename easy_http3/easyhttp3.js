// Section 7: Asynchronous JavaScript, Ajax & Fetch API
// Custom HTTP Library (Fetch With Async Await) - Part 4

// Objective:
// Take what we did with Easy HTTP 2 and implement with Async & Await instead of wrapping it inside a promise

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
  async get(url) {
   const response = await fetch(url);

   const resData = await response.json();
   return resData;
  }

  // Make an HTTP POST Request
  async post(url, data) {

      const response = await fetch(url, { // fetch itself returns a promise
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
      async response = await fetch(url, { // fetch itself returns a promise
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
      const response = await fetch(url, { // fetch itself returns a promise
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });

      const resData = await 'Resource deleted...'
      return resData;
  }
};

