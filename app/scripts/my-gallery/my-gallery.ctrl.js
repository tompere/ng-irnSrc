(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController($scope) {

    var vm = this;

    var defaults = {
      search : true,
      galleryPagination : true,
      resultsPerPage : 5
    };

    vm.sanity = 'online';
    vm.searchText = '';

    init();

    function init(){
      Object.getOwnPropertyNames(defaults)
          .map(function(arg){
            vm[arg] = angular.isDefined(vm[arg]) ? vm[arg] : defaults[arg];
          });
    }

  }
})(angular.module('ngIrnSrcApp'));
