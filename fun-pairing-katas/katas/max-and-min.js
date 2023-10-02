/**
 * Create two functions, max and min, which return the maximum 
 * and the minimum values in an array.
 * If the array has no items, you should return 0.
 */

function max(arrNumbers) {
    //call aux method overwriting the default alphabetic sort
    //sort largest to smallest numerically
    return auxSort(arrNumbers,function(a, b) { return b - a; });
}

function min(arrNumbers) {
    //call aux method overwriting the default alphabetic sort
    //sort smallest to largest numerically
    return auxSort(arrNumbers,function(a, b) { return a - b; });
}

function auxSort(arrNumbers,sortFunc){
    //return 0 if array is empty
    if(arrNumbers.length > 0){ 
        arrNumbers.sort(sortFunc);
        //return element at position 0 which should now be what you're looking for
        return arrNumbers[0];
    }
    return 0;  
}

module.exports = { max, min };
