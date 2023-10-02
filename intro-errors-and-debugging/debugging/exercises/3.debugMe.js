const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function returnMentorString(mentor) {
  return "Hello " + mentor + "!";
}

// Please do not change code below this line

runTest('Get returnMentorString to return "Hello Hannah!"', function () {
  check(returnMentorString("Hannah")).isEqualTo("Hello Hannah!");
});
runTest('Get returnMentorString to return "Hello Lewis!"', function () {
  check(returnMentorString("Lewis")).isEqualTo("Hello Lewis!");
});
runTest('Get returnMentorString to return "Hello Lewis!"', function () {
  check(returnMentorString("Harrison")).isEqualTo("Hello Harrison!");
});
