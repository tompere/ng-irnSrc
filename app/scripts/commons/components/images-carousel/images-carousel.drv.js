(function (module) {
  'use strict';
  module.directive('imagesCarousel', imagesCarousel);

  function imagesCarousel() {
    return {
      scope: {
        images : '=',
        autoRotateIntervalSec : '='
      },
      restrict: 'E',
      templateUrl: 'views/images-carousel.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));