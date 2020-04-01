// Section 11: JavaScript Patterns
// Singleton Pattern

// a manifestation of the module pattern a singleton object is an immediate anonymous function and it can only return one instance of an object at a time.
// only return one instance of an object at a time.
//so repeated calls to the constructor will just return the same instance and like the module pattern it maintains a private reference which nothing from the outside can access.
// Now an example of why you may want to use a singleton is maybe you only want for instance one user object created at a time maybe a logged in user.It would prevent you from having two users from being created at once.
// oftentimes singletons are frowned upon because they give you a global point of access rather than embracing encapsulation and that bothers a lot of programmers and that they can also be kind of hard to debug


const Singleton = (function() {
  let instance;

  function createInstance() {
    const object =  new Object({name:'Kevin'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instance === instanceB);

// console.log(instanceA);