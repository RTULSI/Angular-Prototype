// Code goes here

(function() {
  var app = angular.module("myApp");

  var UserController = function($scope, github, $routeParams) {

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onError = function(reason) {
      $scope.error = "Couldn't load the user data.";
    };
    
    $scope.username = $routeParams.username;
    $scope.order = "stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };


  app.controller("UserController", UserController);
}());