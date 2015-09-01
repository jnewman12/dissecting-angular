function exampleController() {
	this.people = [
	{
		name: "Jimmy",
		born: "Chi-town"
	},
	{
		name: "Steve",
		born: "Florida"
	},
	{
		name: "travis $cott",
		born: "h-town"
	},
	{
		name: "fetty",
		born: "bando"
	},
	{
		name: "drake",
		born: "the 6"
	}
	];
}

function wordFilter() {
	return function (text) {
		return text.toUpperCase();
	}
}

angular.module('app', [])
.controller('exampleController', exampleController)
.filter('capitalize', wordFilter);