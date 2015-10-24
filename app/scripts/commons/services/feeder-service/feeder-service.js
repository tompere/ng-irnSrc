(function(module) {

  'use strict';

  module.factory('feederService', feederService);

  function feederService($filter, $q, $http) {

    function Feeder() {

      var state = [],
          page = [];

      function resolveFeed(rawFeed){
        var res;
        if (angular.isArray(rawFeed)){
          state = rawFeed;
          res = state;
        } else if (angular.isString(rawFeed)){
          res = $http.get(rawFeed).then(function(response){
            state = response.data;
            return state;
          });
        }
        return $q.when(res);
      }

      function ignoreDeleted(){
        state = $filter('deleted')(state);
        return this;
      }

      function orderBy(func){
        state = $filter('orderBy')(state, func);
        return this;
      }

      function filter(predicate){
        state = $filter('filter')(state, predicate);
        return this;
      }

      function paginate(currentPage, resultsPerPage, enabled){
        page = $filter('paginator')(state, currentPage, resultsPerPage, enabled);
        return this;
      }

      function read(){
        return state;
      }

      function readPage(){
        return page;
      }

      return {
        resolveFeed : resolveFeed,
        ignoreDeleted : ignoreDeleted,
        orderBy : orderBy,
        paginate : paginate,
        filter : filter,
        read : read,
        readPage : readPage
      }

    }

    function createFeeder(){
      return new Feeder();
    }

    return {
      createFeeder : createFeeder
    };
  }

})(angular.module('ngIrnSrcApp'));
