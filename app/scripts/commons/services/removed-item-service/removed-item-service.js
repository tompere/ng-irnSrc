(function(module) {

  'use strict';

  module.factory('removedItemService', removedItemService);

  function removedItemService(localStorageService) {

    var KEY = 'gallery_deleted_items';
    var DELIMITER = '<#>';
    var IMAGE_ID_PROPERTY = 'url';

    function notifyDeleted(image){
      var items = getAll(),
          id = extractId(image);
      if (isNotifiedAsDeleted(items, id)){
        return;
      }
      persistNewItem(items, id);
    }

    function isDeleted(image){
      var items = getAll(),
          id = extractId(image);
      return isNotifiedAsDeleted(items, id);
    }

    function isNotifiedAsDeleted(items, id) {
      return _.indexOf(items, id) > -1;
    }

    function persistNewItem(items, toAdd){
      items.push(toAdd);
      localStorageService.set(KEY,
          toStorageValue(items));
    }

    function toStorageValue(items){
      return items.join(DELIMITER);
    }

    function getAll(){
      var values = localStorageService.get(KEY);
      if (values) return values.split(DELIMITER);
      else return [];
    }

    function clearAll(){
      localStorageService.clearAll();
    }

    function extractId(img){
      return img[IMAGE_ID_PROPERTY];
    }

    return {
      notifyDeleted : notifyDeleted,
      isDeleted : isDeleted,
      clearAll : clearAll
    };
  }

})(angular.module('ngIrnSrcApp'));
