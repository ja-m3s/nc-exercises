const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function multiplyByFour(number) {
  return number * 4;
}

// Please do not change code below this line

runTest(
  "Get multiplyByFour to return the passed number multiplied by 4",
  function () {
    check(multiplyByFour(2)).isEqualTo(8);
    check(multiplyByFour(4)).isEqualTo(16);
    check(multiplyByFour(10)).isEqualTo(40);
    check(multiplyByFour(121)).isEqualTo(484);
  }
);
