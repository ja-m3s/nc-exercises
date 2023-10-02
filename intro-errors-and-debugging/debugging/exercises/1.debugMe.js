const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function sayHello() {
  return "hello students";
}

// Please do not change code below this line

runTest('Get sayHello to return "hello students"', function () {
  check(sayHello()).isEqualTo("hello students");
});
