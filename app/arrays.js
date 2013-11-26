if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)
    },

    sum : function(arr) {
        var total = 0;
        for(i=0; i < arr.length; i++){
            total += arr[i]
        }
        return total
    },

    remove : function(arr, item) {
       for (var i = 0; i < arr.length; i++){
         if(arr[i] === item){
          arr.splice(i, 1);
         }
       }
       return arr;
    },

    removeWithCopy : function(arr, item) {
      var result = arr.filter( function(i){ return i != item});
      return result;
    },

    append : function(arr, item) {
              arr.push(item)
              return arr
    },

    truncate : function(arr) {
                arr.pop()
               return arr
    },

    prepend : function(arr, item) {
                 arr.unshift(item)
                 return arr
    },

    curtail : function(arr) {
                arr.shift()
                return arr
    },

    concat : function(arr1, arr2) {
                return arr1.concat(arr2)

    },

    insert : function(arr, item, index) {
                arr.splice(index, 0, item)
                return arr
    },

    count : function(arr, item) {
        var size = arr.filter(function(value) { return value === item }).length;
        return size;
    },

    duplicates : function(arr) {
      var dupe = [], 
          hash = {}, 
          result = [],
          lastInt;
      
      for(var j = 0; j < arr.length; j++){
        lastInt = arr.lastIndexOf(arr[j]);

        if( lastInt !== -1 && lastInt !== j){
          dupe.push(arr[j]);
        }
      }

      for(var i = 0; i < dupe.length; i ++){
        if( !hash.hasOwnProperty(dupe[i]) ){
          hash [ dupe[i] ] = true;
          result.push(dupe[i]);
        }
      }
      return result;
    },

    square : function(arr) {
      for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      for( var i = 0; i < arr.length; i++){
        if (arr[i] == target){
          result.push(i);
        }
      }
      return result;
    }
  };
});
