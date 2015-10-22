(function (module) {
  'use strict';
  module.directive('searchInput', searchInput);

  function searchInput() {
    return {
      scope: {
        input : '='
      },
      restrict: 'E',
      templateUrl: 'views/search-input.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));