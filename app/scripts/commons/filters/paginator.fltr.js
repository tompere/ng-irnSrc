(function (module) {
  'use strict';
  module.filter('paginator', function(){

    return function(input, pageIndex, pageSize, enabled){
      if (enabled && isInputValid(pageIndex, pageSize)){
        return extractSubArray(pageIndex, pageSize, input);
      } else {
        return input;
      }
    };

    function extractSubArray(pageIndex, pageSize, input) {
      var start = (pageIndex - 1) * pageSize;
      var howMany = Math.min(pageSize, input.length);
      return input.splice(start, howMany);
    }

    function isInputValid(pageIndex, pageSize){
      return isValid(pageIndex) && isValid(pageSize);
    }

    function isValid(n){
      return n && !isNaN(n) && n > 0;
    }

  });

})(angular.module('ngIrnSrcApp'));
