const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function returnCatString() {
  const catName = "Jewels";
  return `Hello, I am a cat and my name is ${catName}`;
}

// Please do not change code below this line

runTest('Get returnCatString to return "Hello, I am a cat and my name is Jewels"', function () {
  check(returnCatString()).isEqualTo("Hello, I am a cat and my name is Jewels");
});
