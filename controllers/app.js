angular.module('app', []);

// first way
// angular.module('app').controller('MainCtrl', function($scope) {
	// $scope.message = 'hello, world!';

	// $scope.updateMessage = function(message) {
	// 	$scope.message = message;
	// };
// });	

// same as above, but using the 'controller as' syntax
angular.module('app').controller('MainCtrl', function($scope) {
	var self = this;

	self.message = 'hello';
	self.changeMessage = function(message) {
		self.message = message;
	};
});