const { check, runTest, skipTest } = require("../test-api/index.js");

function collectLikeTerms(expr) {
  // Implement a function collectLikeTerms which takes an expression in a string like 'a + a + a'
  // and then returns a string with a simplified algebraic expression, which in the previous case would be 3a.
  // The characters should be in alphabetical order by default.
  // You can assume that the only operation connecting the terms is addition
  
  //split expression into an array
  expr = expr.split('+');

  //deduplicate array
  let unique = expr.filter((value, index, array) => array.indexOf(value) === index);
  console.log(unique)
  //remove trailing 1s
  for(i = 0; i< unique.length; i++) {
	if(unique[i].charAt(0) === '1'){ unique[i] = unique[i].substring(1)}
  }
  console.log(unique)
  
  //merge array intooooooooooooooo string
  result = unique.join('+');  
  return result;
}

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

runTest(
  "returns a letter when passed an expression with a single letter",
  function () {
    check(collectLikeTerms("a")).isEqualTo("a");
    check(collectLikeTerms("b")).isEqualTo("b");
  }
);

runTest(
  "returns the expression if it is already simplified (not starting with a 1)",
  function () {
    check(collectLikeTerms("2a")).isEqualTo("2a");
    check(collectLikeTerms("3a")).isEqualTo("3a");
  }
);

runTest("if it starts with 1 then it just returns the letter", function () {
  check(collectLikeTerms("1a")).isEqualTo("a");
  check(collectLikeTerms("1y")).isEqualTo("y");
});

runTest("can simply the two duplicated letters added together", function () {
  check(collectLikeTerms("a + a")).isEqualTo("2a");
  check(collectLikeTerms("c + c")).isEqualTo("2c");
});

skipTest(
  "can simplify multiple duplicate letters being added together",
  function () {
    check(collectLikeTerms("a + a + a")).isEqualTo("3a");
    check(collectLikeTerms("z + z + z + z")).isEqualTo("4z");
  }
);

skipTest(
  "can simplify two distinct letters (in alphabetical order)",
  function () {
    check(collectLikeTerms("a + b")).isEqualTo("a + b");
    check(collectLikeTerms("b + a")).isEqualTo("a + b");
  }
);

skipTest(
  "can simplify multiple distinct (with some duplicate) letters being added together",
  function () {
    check(collectLikeTerms("a + b + b")).isEqualTo("a + 2b");
    check(collectLikeTerms("a + a + a + b")).isEqualTo("3a + b");
  }
);
skipTest(
  "can simplify multiple distinct terms, terms consist of multiple letters together",
  function () {
    check(collectLikeTerms("ab + ab")).isEqualTo("2ab");
    check(collectLikeTerms("ab + ab + ab")).isEqualTo("3ab");
  }
);
