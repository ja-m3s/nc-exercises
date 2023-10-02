const { check, runTest } = require("../test-api/index");
/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which are named with letters from a to m.

The colours used by the printer are recorded in a string. 

For example a "good" control string would be aaabbbbhaijjjm meaning: that the printer used colour 'a' three times , colour 'b' four times , colour 'h' one time and so on.

Sometimes there are problems and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

Write a function named countPrinterErrors which given a string will return the error rate of the printer.

You should return a string representing a fraction whose numerator is the number of errors and the denominator the length of the control string. 

Example:
const control = "aaabbbbhaijjjm"
countPrinterErrors(control) should return "0/14"

const control = "aaaxbbbbyyhwawiwjjjwwm"
countPrinterErrors(control) should return "8/22"

 */

function countPrinterErrors() {
  // your solution here
}

runTest("countPrinterErrors() should return a string", function () {
  check(typeof countPrinterErrors("")).isEqualTo("string");
});

runTest(
  "countPrinterErrors() should return zero for an empty control string",
  function () {
    check(countPrinterErrors("")).isEqualTo("0/0");
  }
);

runTest(
  "countPrinterErrors() should return correct control string length",
  function () {
    check(countPrinterErrors("aaa")).isEqualTo("0/3");
  }
);

runTest(
  "countPrinterErrors() should correctly count errors in control string",
  function () {
    check(countPrinterErrors("aaz")).isEqualTo("1/3");
    check(countPrinterErrors("aaaxbbbbyyhwawiwjjjwwm")).isEqualTo("8/22");
  }
);
