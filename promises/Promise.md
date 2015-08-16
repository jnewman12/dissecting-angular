# Promises
- Promises in angular are provided by the built in $q service
- This allows you to execute asynchronous functions in series by registering them with a promise object.
- In `promise_ex.js`, the $timeout() service is used to simulate an asynchronous function. AJAX calls using the $http service is another good example of a promise being used.
- A deferred object is an object that exposed a promise, and the associated methods for resolving that promise. It is constructed using $q.deferred() functions and exposes three methods; resolve(), reject(), and notify(). The associated promise object can be accessed via the promise property.