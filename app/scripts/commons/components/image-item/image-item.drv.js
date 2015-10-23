(function (module) {
  'use strict';
  module.directive('imageItem', imageItem);

  function imageItem() {
    return {
      scope: {
        image : '=',
        onImageClick : '&',
        onImageRemove : '&'
      },
      restrict: 'E',
      templateUrl: 'views/image-item.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));