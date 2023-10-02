const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function accessObject(mentor) {
  const plants = {
    Rob: "Money Plant",
    Hannah: "Sunflower",
    Lewis: "Cactus",
    Harrison: "Venus Fly Trap",
  };
  return plants[mentor];
}

// Please do not change code below this line

runTest("Return the plant of the passed mentor", function () {
  check(accessObject("Lewis")).isEqualTo("Cactus");
  check(accessObject("Rob")).isEqualTo("Money Plant");
  check(accessObject("Hannah")).isEqualTo("Sunflower");
  check(accessObject("Harrison")).isEqualTo("Venus Fly Trap");
});
