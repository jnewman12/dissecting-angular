# Promises
- Promises in angular are provided by the built in $q service
- This allows you to execute asynchronous functions in series by registering them with a promise object.
- In `promise_ex.js`, the $timeout() service is used to simulate an asynchronous function. AJAX calls using the $http service is another good example of a promise being used.
- A deferred object is an object that exposed a promise, and the associated methods for resolving that promise. It is constructed using $q.deferred() functions and exposes three methods; resolve(), reject(), and notify(). The associated promise object can be accessed via the promise property.
- The then() method is an optional error handling callback that will be called if that promise is rejected. 
- The $q service is a function that allows you to quickly convert a callback based asynchronous function into a promise based solution
- One of the guarentees (....or promise...if you will) make is that either the success of error callback will be thrown, but never both. What about if you need to know that the function executed, regardless of the result? Use the .finally() function.
- Chaining: One of the most powerful features of promises is the ability to chain them together. This allows the data to flow through the chain and be manipulated and mutated at each step. Note: the syntax can be difficult to get a hang on.