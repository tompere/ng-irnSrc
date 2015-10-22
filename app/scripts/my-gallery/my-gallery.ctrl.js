(function (module) {
  'use strict';
  module.controller('myGalleryController', myGalleryController);

  function myGalleryController() {

    var vm = this;

    vm.sanity = 'online';

    init();

    function init(){

    }
  }
})(angular.module('ngIrnSrcApp'));
