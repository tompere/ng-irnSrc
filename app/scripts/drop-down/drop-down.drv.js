(function (module) {
  'use strict';
  module.directive('dropDown', dropDown);

  function dropDown() {
    return {
      scope: {
        label : '@',
        options : '=',
        callback : '&'
      },
      restrict: 'E',
      templateUrl: 'views/drop-down.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));