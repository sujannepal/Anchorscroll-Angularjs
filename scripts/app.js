var app = angular.module("myApp", []);

app.controller("myController",['$scope','$location','$anchorScroll', function($scope, $location, $anchorScroll){
	$scope.scrollTo = function(scrollLocation){
		$location.hash(scrollLocation)
		$anchorScroll.yOffset = 20;
		$anchorScroll();

	}

	$scope.message ="hello";
}]);