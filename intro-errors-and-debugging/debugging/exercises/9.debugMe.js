const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function addNumbers(num1, num2) {
  return Number(num1) + Number(num2);
}

// Please do not change code below this line

runTest(
  "Get addNumbers to return the sum of the 2 string numbers passed",
  function () {
    check(addNumbers("5", "6")).isEqualTo(11);
    check(addNumbers("11", "9")).isEqualTo(20);
    check(addNumbers("25", "26")).isEqualTo(51);
  }
);
