(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController() {

    var vm = this;

    vm.noWrapSlides = false;
    vm.active = true;
    vm.slides = [{
      image : 'http://farm9.static.flickr.com/8305/7893507666_0d25cd9f30.jpg',
      text : 'test1'
    }, {
      image : 'http://farm8.static.flickr.com/7275/7550745422_3e323cd79e.jpg',
      text : 'test2'
    }];
    vm.sanity = 'online';

    init();

    function init(){

    }
  }
})(angular.module('ngIrnSrcApp'));
