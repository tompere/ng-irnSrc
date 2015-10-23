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
      vm.sortProperty = vm.sortBySelection[0];
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
      var config = {
            templateUrl: 'views/image-item-modal.tpl.html'
          },
          modalScope = {
            title: img.title,
            url: img.url
          };

      modalService.show(config, modalScope, navCallback);

      /**
       * This is a unique function, it's executed by modal and used as hack for two-way binding.
       * When executed it enjoys both closures of modal and gallery.
       *
       * @param modalScope - a closure with the modal's full context, by reference.
       * @param offset - a number representing the required offset in gallery's images array
       */
      function navCallback(modalScope, offset){
        var index = calcOffsetIndex(modalScope.url, offset);
        modalScope.url = vm.feed[index].url; //'http://leolanese.com/blog/wp-content/uploads/2015/09/AngularJS-Shield-large.png';
      }

      function calcOffsetIndex(currentUrl, offset) {
        var res = offset + (_.findIndex(vm.feed, {url: currentUrl})); // assuming url is unique
        if (res < 0){
          return 0;
        } else if (res >= vm.feed.length){
          return vm.feed.length - 1;
        } else {
          return res;
        }
      }

    }

    function sortImages(input){
      if (vm.sorting){
        return input[vm.sortProperty];
      }
    }
  }

})(angular.module('ngIrnSrcApp'));
