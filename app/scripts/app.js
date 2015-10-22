'use strict';

/**
 * @ngdoc overview
 * @name ngIrnSrcApp
 * @description
 * # ngIrnSrcApp
 *
 * Main module of the application.
 */
angular
  .module('ngIrnSrcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
