const l = require('lodash');

function myFilter(inputCollection, predicate) {
    
    const filtered = [];
    for (let element of inputCollection) {
      if (l.isFunction(predicate)) { // predicate is a function
        if (predicate(element)) {
          filtered.push(element);
        }
      } else if (l.isMatch(element, predicate)) { //predicate is a object
        filtered.push(element);
      }
    }
    return filtered;
  }
  
  module.exports = myFilter;