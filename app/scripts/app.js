(function(app) {
  'use strict';

  app.config(mainAppConfig);

  app.run(function() {
    /** run something **/
  });


  function mainAppConfig(localStorageServiceProvider){

    configLocalStorage();

    function configLocalStorage() {
      localStorageServiceProvider.setPrefix('ngIrnSrcApp_')
          .setStorageType('sessionStorage')
          .setStorageCookie(1);
    }

  }

}(angular.module('ngIrnSrcApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ui.bootstrap',
  'LocalStorageModule'
])));


