(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController($scope,
                               feederService,
                               modalService,
                               removedItemService,
                               galleryConstants ) {

    var vm = this;

    vm.const = galleryConstants;

    var dynamicConfig = {
      feed : null,
      search : true,
      galleryPagination : true,
      sorting : true,
      resultsPerPage : 5,
      currentPage : 1,
      sortProperty : vm.const.SELECT_OPTIONS.SORT_BY[0],
      searchText : ''
    };

    /** methods API **/
    vm.setResultsPerPage = setResultsPerPage;
    vm.setSortOption = setSortOption;
    vm.openModel = openModel;
    vm.removeImage = removeImage;
    vm.clearDeleted = clearDeleted;

    init();

    function init(){
      initDynamicConfig();
    }

    function initDynamicConfig(){
      Object.getOwnPropertyNames(dynamicConfig)
          .forEach(function(arg) {
            setValueIfNeeded(arg);
            setWatch(arg);
          });
    }

    function setValueIfNeeded(arg) {
      if (!angular.isDefined(vm[arg])) {
        vm[arg] = dynamicConfig[arg]; // default value
      }
    }

    function setWatch(prop) {
      var model = 'vm.' + prop;
      $scope.$watch(model, function() {
        updateGallery(model);
      });
    }

    function updateGallery(changedModelName){

      var data = isFeedResolvingRequired() ? vm.feed : vm.resolvedFeed,
          feeder = feederService.createFeeder();

      feeder.resolveFeed(data)
          .then(function(resolved){
            feeder.ignoreDeleted()
                .filter({title: vm.searchText})
                .orderBy(sortGetter)
                .paginate(vm.currentPage, vm.resultsPerPage, vm.galleryPagination);

            vm.resolvedFeed = resolved;
            vm.entireGallery = feeder.read();
            vm.paginatedGallery = feeder.readPage();
          });

      function isFeedResolvingRequired(){
        return changedModelName === 'vm.feed';
      }
    }

    function sortGetter(input){
      if (vm.sorting){
        return input[vm.sortProperty];
      }
    }

    function setResultsPerPage(selection){
      if (!isNaN(selection) && selection > 0){
        vm.resultsPerPage = selection;
      }
    }

    function setSortOption(selection){
      vm.sortProperty = selection.toLowerCase();
    }

    function removeImage(img){
      removedItemService.notifyDeleted(img);
      updateGallery();
    }

    function clearDeleted(){
      removedItemService.clearAll();
      updateGallery();
    }

    function openModel(img){
      var config = {
            templateUrl: 'views/image-item-modal.tpl.html'
          },
          modalScope = {
            title: img.title,
            url: img.url
          },
          gallery = vm.paginatedGallery;

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
        modalScope.url = gallery[index].url;
        modalScope.title = gallery[index].title;
      }

      function calcOffsetIndex(currentUrl, offset) {
        var res = offset + (_.findIndex(gallery, {url: currentUrl})); // assuming url is unique
        if (res < 0){
          return 0;
        } else if (res >= gallery.length){
          return gallery.length - 1;
        } else {
          return res;
        }
      }
    }

  }

})(angular.module('ngIrnSrcApp'));
