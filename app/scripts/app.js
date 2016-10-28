'use strict';

/**
 * @ngdoc overview
 * @name hrclientApp
 * @description
 * # hrclientApp
 *
 * Main module of the application.
 */
angular
  .module('hrclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/timecard', {
        templateUrl: 'views/timecard.html',
        controller: 'TimeCardCtrl',
        controllerAs: 'time'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl',
        controllerAs: 'time'
      })
      .when('/createprofile', {
        templateUrl: 'views/createprofile.html',
        controller: 'CPCtrl',
        controllerAs: 'time'
      })
      .when('/submissions', {
        templateUrl: 'views/submissions.html',
        controller: 'SubCtrl',
        controllerAs: 'time'
      })


      .otherwise({
        redirectTo: '/login'

      });


  });
