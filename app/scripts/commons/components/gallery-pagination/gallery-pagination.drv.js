(function (module) {
  'use strict';
  module.directive('galleryPagination', galleryPagination);

  function galleryPagination() {
    return {
      scope: {
        totalItems : '=',
        currentPage : '=',
        pageSize : '='
      },
      restrict: 'E',
      templateUrl: 'views/gallery-pagination.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));