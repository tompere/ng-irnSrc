(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController() {

    var vm = this;

    var defaults = {
      search : true,
      galleryPagination : true,
      resultsPerPage : 5
    };

    vm.sanity = 'online';
    vm.searchText = '';
    vm.itemsSelection = [5, 10, 15, 20];

    vm.setResultsPerPage = setResultsPerPage;

    init();

    function init(){
      initDefaults();
    }

    function initDefaults() {
      Object.getOwnPropertyNames(defaults)
          .map(function(arg) {
            vm[arg] = angular.isDefined(vm[arg]) ? vm[arg] : defaults[arg];
          });
    }

    function setResultsPerPage(selection){
      if (!isNaN(selection) && selection > 0){
        vm.resultsPerPage = selection;
      }
    }

  }
})(angular.module('ngIrnSrcApp'));
