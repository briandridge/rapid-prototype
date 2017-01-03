console.log("app.js (angular app)");

angular.module('Proto', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'templates/index.html',
          controller: 'squareController'
        });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });