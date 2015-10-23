(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController(modalService) {

    var vm = this;

    var configDefaults = {
      search : true,
      galleryPagination : true,
      sorting : true,
      resultsPerPage : 5
    };

    /** methods API **/
    vm.setResultsPerPage = setResultsPerPage;
    vm.sortBy = sortBy;
    vm.sortImages = sortImages;
    vm.openModel = openModel;

    init();

    function init(){
      initConfigDefaults();
      initInnerState();
    }

    function initConfigDefaults(){
      Object.getOwnPropertyNames(configDefaults)
          .map(function(arg) {
            vm[arg] = angular.isDefined(vm[arg]) ? vm[arg] : configDefaults[arg];
          });
    }

    function initInnerState(){
      vm.itemsSelection = [5, 10, 15, 20];
      vm.sortBySelection = ['title', 'date'];
      vm.sortProperty = 'title';
    }

    function setResultsPerPage(selection){
      if (!isNaN(selection) && selection > 0){
        vm.resultsPerPage = selection;
      }
    }

    function sortBy(selection){
      vm.sortProperty = selection.toLowerCase();
    }

    function openModel(img){
      modalService.show({
        templateUrl : 'views/image-item-modal.tpl.html'
      }, {
        title : img.title,
        url : img.url
      });
    }

    function sortImages(input){
      if (vm.sorting){
        return input[vm.sortProperty];
      }
    }
  }

})(angular.module('ngIrnSrcApp'));
