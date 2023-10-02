const testFuncs = require("../../test-api/index.js");
// Change only line three
const mathFunctions = require("./utils/mathFunctions");
// Change only line three

/* 
The tests in this file currently do not pass. The tests are trying to use functions which are not currently required in the file.
Research into 'object destructuring' 
- https://www.javascripttutorial.net/es6/javascript-object-destructuring/

Use object destructuring to change line 3 only, and get the tests the pass again

You should not need to change any tests - only change line 3

NOTE: Make sure all your previous files still pass their tests

*/

testFuncs.runTest("addNumbers() totals two numbers", function () {
  testFuncs.check(addNumbers(10, 20)).isEqualTo(30);
});
testFuncs.runTest("multiplyNumbers() multiplies two numbers", function () {
  testFuncs.check(multiplyNumbers(5, 5)).isEqualTo(25);
});
testFuncs.runTest("squareNumber() gives the square of number passed", function () {
  testFuncs.check(squareNumber(6)).isEqualTo(36);
});
testFuncs.runTest("divideNumbers() divides first number by second", function () {
  testFuncs.check(divideNumbers(10, 2)).isEqualTo(5);
});

testFuncs.runTest("isEven() return correct boolean for number", function () {
  testFuncs.check(isEven(10)).isEqualTo(true);
  testFuncs.check(isEven(1)).isEqualTo(false);
});
testFuncs.runTest("getSquareRoot() return correct boolean for number", function () {
  testFuncs.check(getSquareRoot(64)).isEqualTo(8);
});
