// Code goes here
(function(){
  var myApp = angular.module("myApp",[]);
  var MainController = function($scope,$http){
  $scope.message = "Hello, Angular!";
  var onUserComplete = function(response){
    $scope.users = response.data;
    $http.get($scope.users.repos_url).then(function(response){
      $scope.repo = response.data
    });
  };
 
  var onError = function(reason){
    $scope.error = "Couldn't load the data";
  };
  $scope.username = "Angular";
  $scope.search = function(username){
     $http.get("https://api.github.com/users/" +username )
        .then(onUserComplete,onError);
  };
 
};
myApp.controller("MainController",["$scope","$http",MainController]);
}());
