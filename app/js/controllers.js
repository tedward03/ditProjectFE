/*angular.module('myApp.genericpages', ['ngRoute'])
.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });*/
var logout = angular.module('myApp.logout', ['ngRoute']);
var about = angular.module('myApp.About', ['ngRoute']);
var contact = angular.module('myApp.Contact', ['ngRoute']);
var usertable = angular.module('myApp.user.table', ['ngTable']);
var httpget  = angular.module('ionicApp', []);
var regular = angular.module("regularservice", []);




logout.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    templateUrl: 'partials/logout.html',
    controller: 'logoutCtrl'
  });
}]);

about.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'aboutCtrl'
  });
}]);


contact.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'contactCtrl'
  });
}]);


about.controller('aboutCtrl', function($scope) {
    $scope.message = 'this is the about page';
});

contact.controller('contactCtrl', function($scope) {
    $scope.message = 'this is the contact page';
});

logout.controller('logoutCtrl', function($scope) {
    $scope.message = 'this is the logout page incase you didnt realize';
});


//TODO stop static  url for this, json is http://localhost:8080/BackendDITproj/webresources/user
usertable.controller('UserCtrl' ,function($scope, $http){
  $scope.users = [];
     $http.get('resources/users.json')

     .success(function(data) {$scope.users = data;})
     .error(function(data) {console.log('Error '+data);
             });
});







var restServices = angular.module('restServices', ['ngResource']);


restServices.controller('resourceCtrl', function ($scope, $http) {
  $http.get('resources/time.json').success(function(data) {
    $scope.resource = data;
  });
});