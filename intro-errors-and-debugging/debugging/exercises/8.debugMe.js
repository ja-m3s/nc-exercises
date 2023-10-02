const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function returnLastDigit(num) {
  const digitStr = String(num);
  return Number(digitStr[digitStr.length - 1]);
}

// Please do not change code below this line

runTest("Get returnLastDigit to return the correct number", function () {
  check(returnLastDigit(1001)).isEqualTo(1);
  check(returnLastDigit(4598)).isEqualTo(8);
  check(returnLastDigit(359579)).isEqualTo(9);
  check(returnLastDigit(390)).isEqualTo(0);
});
