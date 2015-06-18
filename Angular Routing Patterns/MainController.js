// Code goes here

(function() {
  var app = angular.module("myApp");

  var MainController = function($scope, $interval, $location) {

    var decrementCountDown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown <= 1) {
        $scope.search($scope.username);
      }
    };

    var cancelCountDownInterval = null;
    var startcountdown = function() {
      cancelCountDownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {

      if (cancelCountDownInterval) {
        $interval.cancel(cancelCountDownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" +username);
    };
    $scope.username = "Angular";
    $scope.countdown = 5;
    startcountdown();

  };

  app.controller("MainController", MainController);
}());