const { check, runTest, skipTest } = require("../../test-api/index.js");

function capitalArtists(arr) {
  const artists = arr.map((pair) => {
    return pair.split("-");
  });

  return artists;
}

runTest("Returns an array of capitalised music artists ", function () {
  check(capitalArtists([])).isEqualTo([]);
});
runTest("Returns an array of 1 capitalised music artist", function () {
  check(capitalArtists(["Cher - Believe"])).isEqualTo(["CHER"]);
});
runTest("Returns an array of capitalised music artists ", function () {
  check(
    capitalArtists(["Cher - Believe", "Adele - Hello", "Coldplay - Yellow"])
  ).isEqualTo(["CHER", "ADELE", "COLDPLAY"]);
});
