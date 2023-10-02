const { check, runTest } = require("../test-api/index");

/* 
If we list all the whole numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.

The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the limit passed in as an argument.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once! */

function findTotalOfMultiples(limit) {
  // your solution
}

runTest("findTotalOfMultiples() return zero for negative numbers", function () {
  check(findTotalOfMultiples(-1)).isEqualTo(0);
});

runTest("findTotalOfMultiples() returns first multiple of 3", function () {
  check(findTotalOfMultiples(4)).isEqualTo(3);
});

runTest(
  "findTotalOfMultiples() returns sum of multiples of 3 or 5  below limit ",
  function () {
    check(findTotalOfMultiples(6)).isEqualTo(8);
    check(findTotalOfMultiples(10)).isEqualTo(23);
  }
);
