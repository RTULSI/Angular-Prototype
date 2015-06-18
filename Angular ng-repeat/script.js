// Code goes here
(function(){
  var myApp = angular.module("myApp",[]);

  var MainController = function($scope,$http){
    var onRepos = function(response){
      $scope.repo = response.data;
    };
    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
          .then(onRepos,onError);
      };
      var onError = function(reason){
        $scope.error = "Couldn't load the user data.";
      }
    $scope.message ="GithubViewer";
    $scope.search = function(username){
      $http.get("https://api.github.com/users/" + username)
      .then(onUserComplete,onError);
    };
    
  $scope.username = "Angular";
  };
  
  myApp.controller("MainController",["$scope","$http",MainController]);
}());
