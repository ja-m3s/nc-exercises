const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function highFlyers(superheroes) {
  const knownFlyers = [];

  for (let i = 0; i < superheroes.length; i++) {
    if (superheroes[i].ability === "flying" && ! superheroes[i].isAnonymous) {
      knownFlyers.push(superheroes[i]);
    }
  }
  return knownFlyers;
}

// Please do not change code below this line

runTest("Get highFlyers to return all known flyers", function () {
  const heroes = [
    { name: "Spiderman", ability: "spidey-sense", isAnonymous: true },
    { name: "Superman", ability: "flying", isAnonymous: true },
    { name: "Ironman", ability: "flying", isAnonymous: false },
    { name: "Batman", ability: "Has VERY low voice", isAnonymous: true },
    { name: "Wonderwoman", ability: "flying", isAnonymous: false },
    { name: "Shazam", ability: "flying", isAnonymous: true },
  ];
  check(highFlyers(heroes)).isEqualTo([
    { name: "Ironman", ability: "flying", isAnonymous: false },
    { name: "Wonderwoman", ability: "flying", isAnonymous: false },
  ]);
});
