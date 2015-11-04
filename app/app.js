// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
      .when('/', {
        templateUrl : 'index.html',
        controller  : 'mainController'
      })

    // route for the contact page
      .when('/view1', {
        templateUrl : 'pages/view1.html',
        controller  : 'mainController'
      })
    // route for the contact page
    .when('/view2', {
        templateUrl : 'pages/view2.html',
        controller  : 'mainController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
});
