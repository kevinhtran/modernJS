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
     fetch(url) // fetch itself returns a promise
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
   }
 }