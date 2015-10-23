(function (module) {
  'use strict';
  module.directive('imageItem', imageItem);

  function imageItem() {
    return {
      scope: {
        src : '=',
        imgTitle : '='
      },
      restrict: 'E',
      templateUrl: 'views/image-item.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));