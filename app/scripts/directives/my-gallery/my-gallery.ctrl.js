(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController(modalService) {

    var vm = this;

    var defaults = {
      search : true,
      galleryPagination : true,
      resultsPerPage : 5
    };

    vm.setResultsPerPage = setResultsPerPage;
    vm.sortBy = sortBy;
    vm.openModel = openModel;

    init();

    function init(){
      initDefaults();
      vm.sanity = 'online';
      vm.searchText = '';
      vm.itemsSelection = [5, 10, 15, 20];
      vm.sortBySelection = ['Title', 'Date'];
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

    function sortBy(selection){
      var noramlized = selection.toLowerCase();
      console.log(noramlized);
    }

    function openModel(img){
      modalService.show({
        templateUrl : 'views/image-item-modal.tpl.html'
      }, {
        title : img.title,
        url : img.url
      });
    }
  }

})(angular.module('ngIrnSrcApp'));
