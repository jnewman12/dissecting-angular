angular.module('functionalities', [])
.directive("entering", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.addClass(attrs.entering);
			console.log("mouse is in the div");
		})
	 }
})

.directive("leaving", function() {
	return function(scope, element) {
		element.bind("mouseleave", function(){
			element.removeClass(attrs.entering);
			console.log("mouse has left the div");
		})
	}
});