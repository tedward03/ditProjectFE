'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute']);

view1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'partials/view1.html',
    controller: 'View1Ctrl'
  });
}])

view1.controller('View1Ctrl', [function() {

}]);
/*
var restCtrl =  angular.module('restCtrl', []);
restCtrl.controller('UserCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users = User.query();
  }]);*/