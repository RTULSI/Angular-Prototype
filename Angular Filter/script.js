(function(){
  var app = angular.module("myApp",[]);
  app.controller("MainController",function($scope,$http){
    $scope.message = "Github Viewer";
    $scope.username = "RobConery";
   /* $scope.Person = person;*/
     var onUserComplete = function(response){
      $scope.Person = response.data;
      $http.get($scope.Person.repos_url).then(onRepo,onError);
    };
    var onRepo = function(response){
      $scope.repos = response.data;
    };
    var onError = function(reason){
      $scope.error = "Couldn't load the user data.";
    };
    $scope.search = function(username){
      $http.get("https://api.github.com/users/" +username)
      .then(onUserComplete,onError);
    };
   $scope.orderStargazersCount = "'stargazers_count'";
  });
}());