angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'app/views/pages/home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({redirectTo : '/'})

  $locationProvider.html5Mode(true);

})