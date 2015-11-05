var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/view1', {
            templateUrl : 'pages/view1.html'
        })

        .when('/view2', {
            templateUrl : 'pages/view2.html'
        })
});

app.controller('mainController', function($scope) {
});
