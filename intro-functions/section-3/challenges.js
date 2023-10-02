const { check, runTest, skipTest } = require("../test-api/index.js");


//Exercise 1
function countProperties() {
  // This function should take an object as its argument and return the total number of properties it contains
}

runTest(
  "countProperties() counts the number of key-value pairs for a given object",
  function () {
    check(countProperties({})).isEqualTo(0);
    check(countProperties({ name: "shaq" })).isEqualTo(1);
    check(
      countProperties({ name: "shaq", job: "tutor", city: "Manchester" })
    ).isEqualTo(3);
  }
);

//Exercise 2
function isEmptyArray() {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise
}

skipTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});

//Exercise 3
function createProfileDescription() {
  /*
  This function should take an object representing a person and information about whether they like to code

  A user object will take this form:
  {
    name: "Mitch",
    likesToCode: true
  }

  If the 'likesToCode' property is true, then you should return a string of the form 
    "My name is Mitch and I like to code."

  If the 'likesToCode' property is false, the string should look like
    "My name is Mitch and I don't like to code."
  
  This is a good use case for String Template Literals:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  */
}

skipTest(
  "createProfileDescription() will create a sentence about a whether a person likes to code or not",
  function () {
    check(
      createProfileDescription({ name: "Mitch", likesToCode: true })
    ).isEqualTo("My name is Mitch and I like to code.");
    check(
      createProfileDescription({ name: "Lisa", likesToCode: false })
    ).isEqualTo("My name is Lisa and I don't like to code.");
  }
);

// Exercise 4
function readTrafficLight() {
  // This function should take a string representing a traffic light colour as an argument
  // It will be one of "red", "green" or "amber" in either uppercase or lowercase
  // You should return a corresponding message
}

skipTest(
  "readTrafficLight() should print a message according to the different colour passed in",
  function () {
    check(readTrafficLight("green")).isEqualTo("GO!");
    check(readTrafficLight("GREEN")).isEqualTo("GO!");

    check(readTrafficLight("amber")).isEqualTo("GET READY...");
    check(readTrafficLight("AMBER")).isEqualTo("GET READY...");

    check(readTrafficLight("red")).isEqualTo("STOP!");
    check(readTrafficLight("RED")).isEqualTo("STOP!");
  }
);

//Exercise 5
function howManyArguments() {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation
}

skipTest(
  "howManyArguments() returns the number of items passed on a single call",
  function () {
    check(howManyArguments("a", "b", "c")).isEqualTo(3);
    check(howManyArguments()).isEqualTo(0);
    check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
    check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(
      6
    );
  }
);

//Exercise 6
function updateCoinMachine() {
  /*
  This function should take an object representing a coin machine and a string representing a coin as its arguments
  A coinMachine object will take this form:
  {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0
  }
  You should 'add the provided coin to the machine' by altering the associated property and return the updated coinMachine
  */
}

skipTest(
  "updateCoinMachine() will create a message from an details object",
  function () {
    check(
      updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "1p")
    ).isEqualTo({
      "1p": 1,
      "2p": 0,
      "5p": 0,
      "10p": 0
    });
    check(
      updateCoinMachine({ "1p": 0, "2p": 0, "5p": 0, "10p": 0 }, "2p")
    ).isEqualTo({
      "1p": 0,
      "2p": 1,
      "5p": 0,
      "10p": 0
    });
    check(
      updateCoinMachine({ "1p": 0, "2p": 3, "5p": 0, "10p": 0 }, "2p")
    ).isEqualTo({
      "1p": 0,
      "2p": 4,
      "5p": 0,
      "10p": 0
    });
    check(
      updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "5p")
    ).isEqualTo({
      "1p": 0,
      "2p": 3,
      "5p": 11,
      "10p": 0
    });
    check(
      updateCoinMachine({ "1p": 0, "2p": 3, "5p": 10, "10p": 0 }, "10p")
    ).isEqualTo({ "1p": 0, "2p": 3, "5p": 10, "10p": 1 }, "5p");
  }
);

//Exercise 7
function updatePosition() {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */
}

skipTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});

// Exercise 8
function isFalsy() {
  // This function should take any value as an argument, and return true if it is falsy, and false otherwise
}

skipTest(
  "isFalsy() returns true if a value is falsy and false if it is truthy",
  function () {
    check(isFalsy(false)).isEqualTo(true);
    check(isFalsy("")).isEqualTo(true);
    check(isFalsy(0)).isEqualTo(true);
    check(isFalsy(NaN)).isEqualTo(true);
    check(isFalsy(undefined)).isEqualTo(true);
    check(isFalsy(null)).isEqualTo(true);
    check(isFalsy(true)).isEqualTo(false);
  }
);

// Exercise 9
function checkGame() {
  // This function should take a number representing a dice roll and a string repesenting a coin toss as its arguments
  // A dice roll will be a number between 1 and 6
  // A coin toss will be "H" or "T" representing heads or tails
  // The game is considered to be won if the dice roll is 3 or higher AND the coin toss is "H"
  // You should return true if the game has been won, and false otherwise
}

skipTest("checkGame() should check if a user was won the game", function () {
  check(checkGame(3, "H")).isEqualTo(true);
  check(checkGame(4, "H")).isEqualTo(true);
  check(checkGame(5, "H")).isEqualTo(true);
  check(checkGame(6, "H")).isEqualTo(true);
  check(checkGame(6, "T")).isEqualTo(false);
});

//Exercise 10
function addCoins() {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */
}

skipTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([
    [],
    ["2p", "2p"],
    [],
    []
  ]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([
    ["1p"],
    ["2p"],
    [],
    ["10p", "10p"]
  ]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([
    [],
    [],
    ["5p", "5p", "5p"],
    []
  ]);
});

// Mark your progress on the Learn 2 Code platform before moving on to the next set of challenges! 