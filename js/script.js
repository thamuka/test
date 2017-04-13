
var myApp1 = angular.module("myModule1",[]);

myApp1.controller("myController1", function($scope){
	$scope.message = "My first angularjs";
});

var myApp2 = angular.module("myModule2",[]);

myApp2.controller("myController2", function($scope){
	$scope.message = "My second angularjs";
});

myApp2.controller("myController21", function($scope){
	$scope.message = "another message";
});