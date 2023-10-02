const { check, runTest } = require("../../test-api/index.js");
/*


The function should take an array
It should calculate the total of the numbers in the array
Should then print a string which includes the total 

    example:
    const numbers = [1, 2, 3];
    printTotal(numbers)
    returns 'The array has a total of 6'
 */

    const getArrayTotal =  require('./utils/getArrayTotal.js')

function printArrayTotal(arr) {
return "The array has a total of " + getArrayTotal(arr);
  // remember to require in at least 1 util function help you solve this problem!
}

runTest("printArrayTotal() returns a string", function () {
  check(typeof printArrayTotal([])).isEqualTo("string");
});
runTest("printArrayTotal() returns correct message with total", function () {
  check(printArrayTotal([1, 1, 1])).isEqualTo("The array has a total of 3");
  check(printArrayTotal([10, 10, 10])).isEqualTo("The array has a total of 30");
  check(printArrayTotal([5, -1, 2])).isEqualTo("The array has a total of 6");
});
