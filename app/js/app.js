// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'app.services' is found in services.js
// 'app.controllers' is found in controllers.js

var app = angular.module('app', ['ionic', 'app.controllers', 'app.services']);
angular.module('app.controllers', []);
angular.module('app.services', []);

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers/*
  $stateProvider

    .state('dashboard', {
      url: "/",
      templateUrl: 'partials/main.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});

