(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController() {

    var vm = this;

    vm.sanity = 'online';
    vm.searchText = '';

    init();

    function init(){
      vm.search = angular.isDefined(vm.search) ? vm.search : true;
    }

  }
})(angular.module('ngIrnSrcApp'));
