function exampleCtrl() {
	this.start = function() {
		console.log("fun times have begun!")
	}
	this.end = function() {
		console.log("fun is no longer had....")
	}
}

angular.module('functionalities', [])
.controller('exampleCtrl', exampleCtrl)
.directive("entering", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			// $scope.apply() parses the passed string and finds the method within 
			// the scope. 
			scope.$apply("example.start()");
			scope.$apply("example.end()");
			console.log("mouse is in the div");
		})
	 }
})

// .directive("leaving", function() {
// 	return function(scope, element) {
// 		element.bind("mouseleave", function(){
// 			element.removeClass(attrs.entering);
// 			console.log("mouse has left the div");
// 		})
// 	}
// });
