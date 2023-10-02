const { check, runTest, skipTest } = require("../../test-api/index.js");

function shoutNames(names) {

  if (names.length === 0) {
    return []
  }
let shoutedNames = []
console.log(names)
  names.forEach((name) => {
    console.log(name)
    shoutedNames.push(name + "!");
    
  });
  console.log(shoutedNames)
  return shoutedNames;
}
//BETTER TO USE MAPS FOR THIS ONE!!!!!

runTest(
  "shoutNames should return an empty array if passed no names",
  function () {
    check(shoutNames([])).isEqualTo([]);
  }
);
runTest(
  'shoutNames should return an array of one name with "!" on the end',
  function () {
    check(shoutNames(["Harrison"])).isEqualTo(["Harrison!"]);
  }
);
runTest(
  'shoutNames should return an array of names with "!" on the end',
  function () {
    check(shoutNames(["Hannah", "Lewis", "Harrison", "Rob"])).isEqualTo([
      "Hannah!",
      "Lewis!",
      "Harrison!",
      "Rob!",
    ]);
  }
);
