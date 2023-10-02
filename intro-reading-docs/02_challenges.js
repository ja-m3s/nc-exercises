const { check, runTest, skipTest } = require("./test-api/index.js");

function makeAllUpperCase(arrStrings) {
  // This function should take an array of strings as an argument, and return an array of those strings capitalised
  return  arrStrings.map((element) => element.toUpperCase());
}
runTest(
  "makeAllUpperCase() returns an array of capitalised strings",
  function () {
    check(makeAllUpperCase(["a", "b", "c"])).isEqualTo(["A", "B", "C"]);
    check(makeAllUpperCase(["I", "love", "coding"])).isEqualTo([
      "I",
      "LOVE",
      "CODING",
    ]);
  }
);

function collectShortStrings() {
  // This function should take two arguments, an array of strings and a number
  // It should return an array of only the strings that are shorter than the given number
}
skipTest(
  "collectShortStrings() can get only the sufficiently short strings",
  function () {
    check(collectShortStrings(["a", "b", "c"], 3)).isEqualTo(["a", "b", "c"]);
    check(collectShortStrings(["and", "below", "champion"], 6)).isEqualTo([
      "and",
      "below",
    ]);
    check(
      collectShortStrings(["these", "are", "all", "too", "long"], 2)
    ).isEqualTo([]);
    check(
      collectShortStrings(["these", "are", "sometimes", "too", "long"], 5)
    ).isEqualTo(["are", "too", "long"]);
  }
);

function getEvenNumbers() {
  // This function should take an array of numbers as an argument, and return an array of only the even numbers
}
skipTest(
  "getEvenNumbers() can get all the even numbers from an array of numbers",
  function () {
    check(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).isEqualTo([
      2, 4, 6, 8, 10,
    ]);
    check(getEvenNumbers([9, 100, 13, 20])).isEqualTo([100, 20]);
  }
);

function collectPlurals() {
  // This function should take an array of strings as an argument, and return an array of the strings ending with an "s" (retaining the order)
}
skipTest(
  "collectPlurals() can collect all the strings ending in an s",
  function () {
    check(
      collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])
    ).isEqualTo(["dogs", "apples", "kittens"]);
    check(
      collectPlurals([
        "abcs",
        "humans",
        "thoughts",
        "cloud",
        "computer",
        "cups",
      ])
    ).isEqualTo(["abcs", "humans", "thoughts", "cups"]);
  }
);

function createArray() {
  // This function should take a number and a string as its arguments, and return an array of length "number" consisting of elements "string"
  // NOTE: you may have solved this problem before but not necessarily using an array method. Read about the array.fill() method to help you find a different approach!
}
skipTest(
  "createArray() creates an array of the specified length using a specified character",
  function () {
    check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
    check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
    check(createArray(7, "X")).isEqualTo(["X", "X", "X", "X", "X", "X", "X"]);
  }
);

function fixAgeProperties() {
  // This function should take an array of objects representing users as an argument
  // A user object will take the form:
  // {
  //   name: "Liam",
  //   email: 29
  // }
  // All of the user's ages have accidentally been put on a key of "email". This function should return an array of user objects with the "email" key removed, and all their ages now on a correct key of "age"
}
skipTest(
  "fixAgeProperties() fixes the age property for each user",
  function () {
    check(
      fixAgeProperties([
        { name: "Barry", email: 45 },
        { name: "Sandeep", email: 19 },
        { name: "Kavita", email: 38 },
      ])
    ).isEqualTo([
      { name: "Barry", age: 45 },
      { name: "Sandeep", age: 19 },
      { name: "Kavita", age: 38 },
    ]);
  }
);

function countTheObjects() {
  // This function should take an array containing various data types as an argument, and return a count of how many elements are objects
}
skipTest(
  "countTheObjects() counts all the objects in an array of multi-type items",
  function () {
    check(
      countTheObjects([
        { name: "Barry", password: "ilovetea" },
        { name: "Sandeep", password: "ilovecoffee" },
        { name: "Kavita", password: "ilovepie" },
      ])
    ).isEqualTo(3);
    check(countTheObjects([{}, {}, {}, {}, {}])).isEqualTo(5);
    check(countTheObjects([1, {}, true, {}, {}, false, {}, {}])).isEqualTo(5);
    check(
      countTheObjects([
        1,
        { cat: "Schnitzel" },
        true,
        {},
        {},
        false,
        42,
        {},
        {},
      ])
    ).isEqualTo(5);
    check(countTheObjects([7, "hello", 45, true])).isEqualTo(0);
  }
);

function getEmptyTills() {
  // This function should take an array of objects representing tills as an argument
  // A till object will take the form:
  // {
  //   name: "Dave",
  //   checkout: ["haribo", "coffee"]
  // }
  // Your function should return an array of the till objects that have no elements in their checkout array
}
skipTest("getEmptyTills() gets all the tills that are empty", function () {
  const tills = [
    {
      name: "John",
      checkout: ["bread", "eggs", "milk", "sausages"],
    },
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "Anat",
      checkout: ["chocolate"],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ];
  check(getEmptyTills(tills)).isEqualTo([
    {
      name: "Foluso",
      checkout: [],
    },
    {
      name: "jonny",
      checkout: [],
    },
  ]);
});
