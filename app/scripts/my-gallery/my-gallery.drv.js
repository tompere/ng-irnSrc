(function (module) {
  'use strict';
  module.directive('myGallery', myGallery);

  function myGallery() {
    return {
      scope: {
        test: '@'
      },
      restrict: 'E',
      //controller: 'alertBoxController',
      //controllerAs: 'vm',
      //bindToController: true,
      templateUrl: 'views/my-gallery.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));
