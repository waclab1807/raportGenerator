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

        .when('/confirmPage', {
            templateUrl : 'pages/confirmPage.html'
        })
});

app.controller('mainController', function($scope) {

    $scope.data = {
        name: "",
        lastname: "",
        company: "",
        email: ""
    };

    $('input[name="daterange"]').daterangepicker({
        "startDate": "10/31/2015",
        "endDate": "11/06/2015",
        "opens": "center"
    }, function(start, end, label) {
    });
});
