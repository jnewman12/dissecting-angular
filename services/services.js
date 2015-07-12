var app = angular.module('services', []);

app.factory('messages', function(){
	var messages = {};

	messages.list = [];

	messages.add = function(message) {
		messages.list.push({id: messages.list.length, text: message});
	};

	return messages
});

// controller to view
app.controller('ListCtrl', function(messages) {
	var self = this;

	self.messages = messages.list;
});

// controller to inject the messages service 
app.controller('PostCtrl', function(messages) {
	var self = this;

	self.newMessage = "Hello, World!";

	self.addMessage = function(message) {
		messages.add(message);
		self.newMessage = '';
	};
});