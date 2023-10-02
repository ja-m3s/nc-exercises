/** The areOrdered function should take an array of numbers as an input. 
 * It should return true if all the numbers are in ascending order 
 * and false if they are not. An empty array should return false.*/

function areOrdered(arrNumbers) {
    let arrNumbersSorted = arrNumbers.toSorted()
    console.log(arrNumbers," sorted is ",arrNumbersSorted)
    
    //no array comparison built in and arrays won't be equal even if values
    //are the same, so convert to string and compare them instead.
    //May not handle all cases, i.e. undefined but that is out of scope for task
    if(JSON.stringify(arrNumbers) === JSON.stringify(arrNumbersSorted) && arrNumbers.length > 0) { 
        return true
    }
    return false;
}

module.exports = areOrdered;
