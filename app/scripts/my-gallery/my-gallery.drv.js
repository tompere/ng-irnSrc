(function (module) {
  'use strict';
  module.directive('myGallery', myGallery);

  function myGallery() {
    return {
      scope: {
        //feed : '=',
        //search : '=?',
        //pagination : '=?',
        //resultsPerPage : '=?',
        //sorting : '=?'
      },
      restrict: 'E',
      controller: 'myGalleryController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'views/my-gallery.tpl.html'
    };
  }
})(angular.module('ngIrnSrcApp'));

//feed (String/Array) - path to load the json from / array of images
//search (Boolean default:true) - show a search box
//pagination (Boolean default true) - show a pagination component in the gallery.
//    results-per-page (Number, default 10) - number of results on each page of the gallery
//sorting (Boolean default true) - allow the user to sort by the images elements (title, date)

