(function(){
	var app = angular.module("myApp",[]);
	app.controller("MainController",function($http,$scope){
		$scope.message = "Sample Example";
		var url = "data.txt";
		$http.get(url).success(function(response){
		  $scope.students = response; 
		});
	});
}())