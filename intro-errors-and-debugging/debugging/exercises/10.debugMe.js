const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function findingNemo(fish) {
  const fishTank = {
    "Clown Fish": "Nemo",
    "Blue Tang": "Dory",
    "Great White Shark": "Bruce",
    "Moorish Idol": "Gill",
    "Sea Turtle": "Crush",
  };

  return fishTank[fish];
}

// Please do not change code below this line

runTest("Get finsdingNemo to return the name of the given fish", function () {
  check(findingNemo("Clown Fish")).isEqualTo("Nemo");
});
