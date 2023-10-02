const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function harrisonsComparisons(money, product) {
  const carBootPrices = {
    "Groovy-Chick Roller Skates": 4,
    "Broken Guitar": 6,
    "Mysterious Box": 100,
    "Used Dentures": 0.5,
    "500 Piece, Rare Bottle Cap Collection": 1,
  };
  console.log(money,carBootPrices[product])
  if (money >= carBootPrices[product]) {
    return `Harrison can buy ${product}!`;
  }
  return `Harrison can not buy ${product} :(`;
}

// Please do not change code below this line

runTest("harrisonsComparisons returns the correct string", function () {
  check(harrisonsComparisons(50, "Groovy-Chick Roller Skates")).isEqualTo(
    `Harrison can buy Groovy-Chick Roller Skates!`
  );
  check(harrisonsComparisons(50, "Used Dentures")).isEqualTo(
    `Harrison can buy Used Dentures!`
  );
  check(harrisonsComparisons(50, "Mysterious Box")).isEqualTo(
    `Harrison can not buy Mysterious Box :(`
  );
});
