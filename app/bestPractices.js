if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals: function() {
      // myObject = {
      //   name: 'Jory'
      // };

      // return myObject;
    },

    functions : function (flag) {
      var answer;
      function getValue(letter) {
        return letter;
      }

      if (flag) {
       answer = getValue('a');
      } else {
       answer = getValue('b');
      }
      return answer
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      if(val1 === val2){
        return true
      }else{
        return false
      }
    }
  };
});
