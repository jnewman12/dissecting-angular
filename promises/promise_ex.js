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

var app = angular.module('app',[]);
.factory('getData', getData) {
.run(function(getData) {
  var promise = getData()
})