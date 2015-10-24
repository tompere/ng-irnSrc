(function (module) {
  'use strict';
  module.filter('paginator', function(){

    return function(input, pageIndex, pageSize, enabled){
      if (enabled && isInputValid(pageIndex, pageSize)){
        return paginate(pageIndex, pageSize, input);
      } else {
        return input;
      }
    };

    function paginate(pageIndex, pageSize, arr) {
      var end,
          start = (pageIndex - 1) * pageSize,
          last = arr.length;

      if (start < last){
        end = Math.min(start + pageSize, last);
      }

      return arr.slice(start, end);
    }

    function isInputValid(pageIndex, pageSize){
      return isValid(pageIndex) && isValid(pageSize);
    }

    function isValid(n){
      return n && !isNaN(n) && n > 0;
    }

  });

})(angular.module('ngIrnSrcApp'));
