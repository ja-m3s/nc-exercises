const { check, runTest, skipTest } = require("./test-api/index.js");

/*
extractCode()

This function should take a string as an argument
Somwhere in the middle of the string, there will be a series of consecutive digits composing a number
You should extract that number from the string and return it
*/
function extractCode(str) {
    let extractedNumber = String(str).match(/\d+/)
    return Number(extractedNumber)
}

runTest(
  "extractCode() can find the number in a single word string",
  function () {
    check(extractCode("abcd67yuio")).isEqualTo(67);
    check(extractCode("abcd103yuio")).isEqualTo(103);
    check(extractCode("abcd4567yuio")).isEqualTo(4567);
    check(extractCode("abcd1000289yuio")).isEqualTo(1000289);
  }
);

/*
isValidSortCode()

This function should take a string representing a sort code as an argument
A valid sort code should adhere to the format: 2 digits hyphen 2 digits hyphen 2 digits
You should return true if the sort code is valid, and false otherwise
*/
function isValidSortCode(str) {
  return /^\d{2}-\d{2}-\d{2}$/.test(str)
 
}

runTest(
  "isValidSortCode() should check is a sort code string is in the correct format",
  function () {
    check(isValidSortCode("10-34-67")).isEqualTo(true);
    check(isValidSortCode("51-34-58")).isEqualTo(true);
    check(isValidSortCode("85-16-23")).isEqualTo(true);

    check(isValidSortCode("51-349-67")).isEqualTo(false);
    check(isValidSortCode("7980-34-67")).isEqualTo(false);
    check(isValidSortCode("34-12-899")).isEqualTo(false);
    check(isValidSortCode("a8-78-10")).isEqualTo(false);
    check(isValidSortCode("45_78_10")).isEqualTo(false);
  }
);

/*
isProfessionalEmail()

This function should take a string representing an email as an argument
An email is considered to be professional if it does not end with a kiss ("x" or "X")
You should return true if the email is professional, and false otherwise
*/
function isProfessionalEmail(str) {
  return /[^xX]$/.test(str)
}

runTest(
  "isProfessionalEmail() checks if an email ends with an x",
  function () {
    check(isProfessionalEmail("x")).isEqualTo(false);
    check(isProfessionalEmail("Dear Sir/Madam")).isEqualTo(true);
    check(isProfessionalEmail("Dear Alex, How are you?")).isEqualTo(true);
    check(isProfessionalEmail("i miss u xx")).isEqualTo(false);
    check(isProfessionalEmail("X_X")).isEqualTo(false);
  }
);

/*
countVowels()

This function should take a string as an argument, and return a count representing the number of vowels it contains
*/
function countVowels(str) {
  const vowels = str.match(/[aeiou]/ig)
  if (vowels === null){
    return 0;
  }
  return vowels.length;
}

runTest("countVowels() counts the vowels in a string", function () {
  check(countVowels("")).isEqualTo(0);
  check(countVowels("bcd")).isEqualTo(0);
  check(countVowels("a")).isEqualTo(1);
  check(countVowels("abc")).isEqualTo(1);
  check(countVowels("AEbiO")).isEqualTo(4);
  check(countVowels("aaeee!!!")).isEqualTo(5);
});

/*
sumNums()

This function should take a string as an argument, and return a sum of all the numbers found within.
Consecutive digits should be taken as numbers: i.e. "24" = 24, not 6
If there are no numbers, you should return 0
*/
function sumNums(str) {
  const nums = str.match(/\d{1,}/ig)
  if (nums === null){
    return 0;
  }
  return Number(nums.reduce((a, b) => (Number(a) + Number(b)), 0));
}

runTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums("hello")).isEqualTo(0);
  check(sumNums("1")).isEqualTo(1);
  check(sumNums("12")).isEqualTo(12);
  check(sumNums("1hello2")).isEqualTo(3);
  check(sumNums("12hiya!3")).isEqualTo(15);
});

/*
testValidCountdown()

This function should take a string as an argument
The function must return a boolean depending on if the string is a valid 
collection of letters for the TV show countdown.
In countdown a valid collection contains at least 4 consonants and 3 vowels and has exactly 9 letters
*/
function testValidCountdown(str) {
  return /^\w{9}$/.test(str) && /[aeiou]{3,5}/.test(str) && /[^aeiou]{4,6}/.test(str)
  //return /(?=^\w{9}$)(?=[aeiou]{3,5})(?=[^aeiou]{4,6})/.test(str)
}

runTest(
  "testValidCountdown() Returns true if the string contains at least 4 consonants and 3 vowels and has exactly 9 letters, false otherwise",
  function () {
    check(testValidCountdown("aaabbbccc")).isEqualTo(true);
    check(testValidCountdown("eeeedddff")).isEqualTo(true);
    check(testValidCountdown("aeiouwxyz")).isEqualTo(true);
    check(testValidCountdown("aeiouaxyz")).isEqualTo(false);
    check(testValidCountdown("aabbbcccd")).isEqualTo(false);
    check(testValidCountdown("aeiouvwxyz")).isEqualTo(false);
    check(testValidCountdown("aaaaaaaaa")).isEqualTo(false);
    check(testValidCountdown("bbbbbbbbb")).isEqualTo(false);
  }
);

/*
extractRepoName()

This function should take a string representing a github url and return the name of the repo.
Github urls are of the form https://github.com/northcoders/intro-week
where "northcoders" is the name of the account and "intro week is the name of the repo"
*/
function extractRepoName(str) {
  const repo = str.match(/(?<=\/)[A-z-]+/g);
  return repo[2];
}

runTest("extractRepoName() Returns repo name", function () {
  check(extractRepoName("https://github.com/northcoders/intro-week")).isEqualTo(
    "intro-week"
  );
  check(
    extractRepoName("https://github.com/northcoders/remote-git-workshop")
  ).isEqualTo("remote-git-workshop");
  check(extractRepoName("https://github.com/myAccount/notes")).isEqualTo(
    "notes"
  );
  check(
    extractRepoName("https://github.com/myAccount/notes/settings")
  ).isEqualTo("notes");
});

/*
testExact2ConsecutiveLs()

This function should take a string as an argument
You will need to check whether or not it contains *exactly* 2 consecutive occurrences of the letter "l" (lower case)
This means that there *must* be exactly 2 "l"s in total and they *must* be consecutive
You should return true if this is the case, and false otherwise
*/
function testExact2ConsecutiveLs(str){
  return /(ll){1}/.test(str) && str.match(/l/g).length === 2
  //console.log(str.match(/(ll){1}/g))
  //return /(ll){1}/g.test(str)

}

runTest(
  'testExact2ConsecutiveLs() Returns true if there are exactly two consecutive occurrences of the letter "l" ',
  function () {
    check(testExact2ConsecutiveLs("ll")).isEqualTo(true);
    check(testExact2ConsecutiveLs("hello")).isEqualTo(true);
    check(testExact2ConsecutiveLs("bells")).isEqualTo(true);
    check(testExact2ConsecutiveLs("bellows")).isEqualTo(true);
    check(testExact2ConsecutiveLs("aaaallasdows")).isEqualTo(true);
    check(testExact2ConsecutiveLs("llama")).isEqualTo(true);
    check(testExact2ConsecutiveLs("well")).isEqualTo(true);

    check(testExact2ConsecutiveLs("mile")).isEqualTo(false);
    check(testExact2ConsecutiveLs("fly")).isEqualTo(false);
    check(testExact2ConsecutiveLs("wellll")).isEqualTo(false);
    check(testExact2ConsecutiveLs("mitchelllloyd")).isEqualTo(false);
    check(testExact2ConsecutiveLs("l")).isEqualTo(false);
  }
);

/*
validatePin() 

Write a function using regex which is going to validate a PIN number. It should only contain digits and exactly 4 or 6 of them. The function should return true or false.

For example: 
- 3542 true
- h23452 false
- 765609 true
- ymca false
- 000432 true
- 4h537 false
- 76452 false
- 1138 true
- 75500782 false
*/

function validatePin(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin)
  
}
runTest("validatePin() ", function () {
  check(validatePin("3542")).isEqualTo(true);
  check(validatePin("765609")).isEqualTo(true);
  check(validatePin("h23452")).isEqualTo(false);
  check(validatePin("000432")).isEqualTo(true);
  check(validatePin("4k56")).isEqualTo(false);
});

/*
spotTheContraction()

Write a function using regex to return true if a sentence contains any of these contractions: "I'm", "I've" or "don't". (case insensitive) This function will take a string and return true or false. See examples below: 

- "do not" false
- "don't" true
- "I am" false
- I have been fishing and I've caught plenty fishes true
- "I am a coding panda" false
- "I'm a coding panda" true
- I've got a collection of foreign coins true
- "Sometimes I do not like to get up early" false
- "Sometimes I don't like to get up early" true
- "Don't feed the birds"
*/

function spotTheContraction(str){
  return /(I\'m)|(I\'ve)|(don\'t)/.test(str)
}
runTest("spotTheContraction() ", function () {
  check(spotTheContraction("do not")).isEqualTo(false);
  check(spotTheContraction("I am")).isEqualTo(false);
  check(spotTheContraction("I am a coding panda")).isEqualTo(false);
  check(
    spotTheContraction("Sometimes I do not like to get up early")
  ).isEqualTo(false);
  check(spotTheContraction("I am a vampire and I don't drink water")).isEqualTo(
    true
  );
  check(spotTheContraction("I have been fishing")).isEqualTo(false);
  check(spotTheContraction("I've got a collection of foreign coins")).isEqualTo(
    true
  );
});

///////////////////////////////////////////////////////////////////////////

// Great work so far! The next challenges are ADVANCED, proceed with caution! :)

/*
  excludeWords() 
  
    Write a function using regex which returns a string with everything except the words 'north' and 'coders'. Everything else, even words starting, including or ending with these words should be matched. Your mathces and non-matches should be case insensitive.
  
    For example: 
    - "I visited the north pole last year." should be "I visited the pole last year."
    - "I study at Northcoders." should be "I study at Northcoders."
    - "IBM hired a lot of coders." should be "IMB hired a lot of ."
  
    */

function excludeWords(str) {
  const regex = /(\snorth)|(\scoders)/g;
  ///console.log()
  return str.replace(regex,'');
}

runTest("excludeWords() ", function () {
  check(excludeWords("I visited the north pole last year")).isEqualTo(
    "I visited the pole last year"
  );
  check(excludeWords("I study at Northcoders")).isEqualTo(
    "I study at Northcoders"
  );
  check(excludeWords("IBM hired a lot of coders lately")).isEqualTo(
    "IBM hired a lot of lately"
  );
});

/*
 matchUniqueDigits()

Write a function using regex that will return true when the given number is composed of unique digits.

For example:

- 1234 true
- 1233 false
- 493710 true
- 00 false
*/

function matchUniqueDigits(params) {
  //TO DO AT OUR OWN CONVENIENCE
}
runTest("matchUniqueDigits() ", function () {
  check(matchUniqueDigits("1234")).isEqualTo(true);
  check(matchUniqueDigits("1233")).isEqualTo(false);
  check(matchUniqueDigits("493710")).isEqualTo(true);
  check(matchUniqueDigits("00")).isEqualTo(false);
});

///////////////////////////////////////////////////////////////////////////
