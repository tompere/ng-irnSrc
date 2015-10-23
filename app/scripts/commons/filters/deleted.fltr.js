(function (module) {
  'use strict';
  module.filter('deleted', function(removedItemService){

    return function(input){
      return input.filter(function(img){
        return !removedItemService.isDeleted(img);
      });
    };

  });

})(angular.module('ngIrnSrcApp'));
