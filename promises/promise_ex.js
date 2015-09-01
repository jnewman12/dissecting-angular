function getData($timeout, $q) {
	return function() {
		var defer = $q.defer()

		// example async function
		$timeout(function() {
		  defer.resolve('data received!')
		}, 2000)

		return defer.promise
	}
}

function getPromiseData($timeout, $q) {
	return function() {
	    // simulated async function
	    return $q(function(resolve, reject) {
	      $timeout(function() {
	        if(Math.round(Math.random())) {
	          resolve('data received!')
	        } else {
	          reject('oh no an error! try again')
	        }
	      }, 2000)
	    })
	}
}
// this method accomplished the same thing as above

// finally function
.run(function(getPromiseData) {
	var promise = getPromiseData()
	.then(function(string) {
		console.log(string)
	}, function(error) {
		console.log(error)
	})
	.finally(function() {
		console.log("Finished at:", new Date())
	})
})

function chainingData($timeout, $q) {
	return function() {
		return $q(function(resolve, reject) {
			$timeout(function() {
				resolve(Math.floor(Math.random() * 10))
			}, 2000)
		})
	}
}

var app = angular.module('app',[]);
.factory('getData', getData) {
.run(function(getData) {
  var promise = getData()
})

