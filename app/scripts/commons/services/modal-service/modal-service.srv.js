(function(module) {

  'use strict';

  module.factory('modalService', modalService);

  function modalService($uibModal) {

    var defaultOptions = {
      backdrop: true,
      keyboard: true,
      modalFade: true
    };

    var defaultScope = {};

    function showModal(customOptions, customScope, customClickCallback) {
      var options = {}, scope = {};
      angular.extend(options, defaultOptions, customOptions);
      angular.extend(scope, defaultScope, customScope);

      if (!options.controller) {
        options.controller = function($scope, $modalInstance) {
          $scope.vm = scope;
          $scope.vm.ok = function(result) {
            $modalInstance.close(result);
          };
          $scope.vm.close = function() {
            $modalInstance.dismiss('cancel');
          };
          $scope.vm.clickCallback = function(offset){
            customClickCallback($scope.vm, offset)
          };
        };
      }
      options.controller.$inject = ['$scope', '$modalInstance']; // required for minifaction
      return $uibModal.open(options).result;
    }

    return {
      show : showModal
    };
  }

})(angular.module('ngIrnSrcApp'));
