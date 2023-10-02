"use strict";

function deepTotal(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) { 
            sum += deepTotal(arr[i])
        } else {   
            sum += arr[i]
        }
    }
    
    return sum
}

/***
 * Implement a function that determines if an array 
 * includes a particular value at any level of nesting.
 * 
 * deepIncludes([1, 2], 3); // ---> false
 * deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado"); // ---> true
 * 
 */
//just writing the boilerplate...
function deepIncludes(arr,value){
   let found = false;
    for (let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) { 
            found = deepIncludes(arr[i],value)
        } 

        if(arr[i] === value){ 
            //FOUND IT!
            return true
        }        
    }
    
    return found
}

//Implement a function that counts the number of 
//objects in an arbitrarily nested object.
function countObjects(obj){
    let count = 1
    for (let key in obj) {
        if (typeof obj !== 'object') {
            return 1
        } else {
            count+=countObjects(obj[key])
        }
    }
    return count
}

/**
 * Deep freeze (advanced)
 * Implement your own version of the deep-
 *  function, which takes an object (or an array)
 *  and freezes it and all of its child array/objects, 
 * meaning none of them can be mutated.
 * You may wish to read up more on Object.freeze 
 *  understand how it works shallowly on objects 
 * and arrays.
 */
function deepFreeze(obj){
    
    for (let key in obj) {
        console.log(key)
        if (typeof key === 'object') {
            console.log("obj[key] = ",obj[key])
            return deepFreeze(obj[key])
        } 
        Object.freeze(obj)
    }
    return Object.freeze(obj)
}

module.exports = { deepTotal, deepIncludes, countObjects, deepFreeze }