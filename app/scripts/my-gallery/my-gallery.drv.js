(function (module) {
  'use strict';
  module.directive('myGallery', myGallery);

  function myGallery() {
    return {
      scope: {
        feed : '='
        //search : '=?',
        //pagination : '=?',
        //resultsPerPage : '=?',
        //sorting : '=?'
      },
      restrict: 'E',
      controller: 'myGalleryController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'views/my-gallery.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));