const { check, runTest, skipTest } = require("../test-api/index.js");

// Challenge 0

// This function should be called return the product of two passed numbers.

// multiply() {}
function multiply(a,b){ return a * b; }

runTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(17, 19)).isEqualTo(323);
  check(multiply(-180, 2)).isEqualTo(-360);
});

// Challenge 1

// roundDown() {}
function roundDown(arg1){ return Math.floor(arg1) }
// This function should take a single argument and return its value rounded DOWN to the nearest integer.

runTest(
  "roundDown() returns the result of rounding down to the nearest integer",
  function () {
    check(roundDown(100.1)).isEqualTo(100);
    check(roundDown(25.5)).isEqualTo(25);
    check(roundDown(121.999)).isEqualTo(121);
  }
);

// Challenge 2

// This function should take two arguments, m and n, and return m raised to the power of n.

// raiseToPower()
function raiseToPower(arg1,arg2){return Math.pow(arg1,arg2)}

runTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

// Challenge 3

// This function should take a number as an argument, and return true if it is a multiple of 6, and false otherwise.

// isMultipleOf6()
function isMultipleOf6(arg1){

return (arg1%6 === 0) ? true : false;

}

runTest(
  "isMultipleOf6() should check if a number is divisible by 6",
  function () {
    check(isMultipleOf6(6)).isEqualTo(true);
    check(isMultipleOf6(10)).isEqualTo(false);
    check(isMultipleOf6(15)).isEqualTo(false);
    check(isMultipleOf6(36)).isEqualTo(true);
    check(isMultipleOf6(60)).isEqualTo(true);
    check(isMultipleOf6(61)).isEqualTo(false);
  }
);

// Challenge 4

// This function should take a string as an argument and return the same string with the first letter capitalised.

// capitaliseFirstLetter()
function capitaliseFirstLetter(arg1){
	return arg1.substring(0,1).toUpperCase()+arg1.substring(1);
}

runTest(
  "capitaliseFirstLetter() capitalises the first letter in a string",
  function () {
    check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
    check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
    check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
  }
);

// Challenge 5

// This function should take a number as an argument representing a year, 
// and return true if that year is in the 20th century and false otherwise.

// isInThe20thCentury()
function isInThe20thCentury(arg1){

	return arg1 > 1900 && arg1 <= 2000
}

runTest(
  "isInThe20thCentury() checks if a number is within 1901 to 2000 (inclusive)",
  function () {
    check(isInThe20thCentury(1962)).isEqualTo(true);
    check(isInThe20thCentury(1901)).isEqualTo(true);
    check(isInThe20thCentury(1900)).isEqualTo(false);
    check(isInThe20thCentury(1913)).isEqualTo(true);
    check(isInThe20thCentury(1876)).isEqualTo(false);
    check(isInThe20thCentury(2001)).isEqualTo(false);
    check(isInThe20thCentury(2000)).isEqualTo(true);
  }
);

// Challenge 6

// This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise.

// HINT: all absolute file paths start with a /

// isAbsolutePath()
function isAbsolutePath(arg1){
	return  (arg1.substring(0,1) === '/') ? true : false ;
}

runTest(
  "isAbsolutePath() checks if a file path is absolute or relative",
  function () {
    check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
    check(
      isAbsolutePath(
        "/Users/mitch/northcoders/remote_course/remote_precourse_1"
      )
    ).isEqualTo(true);
    check(isAbsolutePath("../composers")).isEqualTo(false);
    check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
  }
);

// Challenge 7

/*

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII code for <character> is <character-code>"
*/

// getCharCode()
function getCharCode(arg1){
	return "The ASCII code for "+arg1+" is "+arg1.charCodeAt(0);
}

runTest(
  "getCharCode() will return a message stating the ASCII code of a passed char",
  function () {
    check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
    check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
    check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
    check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
    check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
    check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
  }
);

// Challenge 8

// This function should take a length and a character as arguments and return an array of the given length populated with the given character.

// createArray()
function createArray(len,character){
	let arr = []
	for(let i = 0; i<len; i++){
		arr.push(character);
	}
	return arr;

}
runTest(
  "createArray() creates an array of the specified length using a specified character",
  function () {
    check(createArray(3, "!")).isEqualTo(["!", "!", "!"]);
    check(createArray(5, "a")).isEqualTo(["a", "a", "a", "a", "a"]);
  }
);

// Challenge 9
/*
This function should take a number representing a battery level as a percentage
If the battery level is less than or equal to 5%, then you should return a string stating:
    "Warning - battery level low: <number-here>%, please charge your device"
If the battery level is between 5 and 99% then it should return a string stating:
    "Battery level: <number-here>%"
If the battery level is 100% then it should return a string stating:
    "Fully charged :)"
*/

// checkBatteryLevel()
function checkBatteryLevel(level){

	if(level === 100){
		return "Fully charged :)";
	}

	if(level > 5){
		return "Battery level: "+level+"%";
	}

	return "Warning - battery level low: "+level+"%, please charge your device";
}

runTest(
  "checkBatteryLevel() should return a message with info about the battery level",
  function () {
    check(checkBatteryLevel(100)).isEqualTo("Fully charged :)");

    check(checkBatteryLevel(99)).isEqualTo("Battery level: 99%");
    check(checkBatteryLevel(80)).isEqualTo("Battery level: 80%");
    check(checkBatteryLevel(30)).isEqualTo("Battery level: 30%");
    check(checkBatteryLevel(10)).isEqualTo("Battery level: 10%");
    check(checkBatteryLevel(6)).isEqualTo("Battery level: 6%");

    check(checkBatteryLevel(5)).isEqualTo(
      "Warning - battery level low: 5%, please charge your device"
    );
    check(checkBatteryLevel(4)).isEqualTo(
      "Warning - battery level low: 4%, please charge your device"
    );
    check(checkBatteryLevel(3)).isEqualTo(
      "Warning - battery level low: 3%, please charge your device"
    );
    check(checkBatteryLevel(1)).isEqualTo(
      "Warning - battery level low: 1%, please charge your device"
    );
  }
);

// Challenge 10

// This function should take an array as an argument and return an array containing all string elements from the input (retaining the order)

// collectStrings()
function collectStrings( arr ){
	for(let i = 0; i < arr.length; i++ ){
		if( typeof arr[i] != 'string' ) { 
			arr.splice(i,1)
		}
	}
	return arr;
}

runTest("collectStrings() can get all the strings from an array", function () {
  check(collectStrings(["a", "b", "c"])).isEqualTo(["a", "b", "c"]);
  check(collectStrings(["a", 10, "b", 1000, "c"])).isEqualTo(["a", "b", "c"]);
});

/******* Refactor Bonus Challenge *******

1. Challenge 5 - complete this problem without resorting to if statements!
2. Refactor every function into an ES6 arrow function () => {}
*/
