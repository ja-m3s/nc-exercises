// Please do not change the name of this function
function foldString(str) {
  let arrWords = str.split(" ");
  for (let i = 0; i < arrWords.length; i++) {
    let middleChar = "";
    let middle = Math.floor(arrWords[i].length / 2);
    let firstPart = arrWords[i].substring(0, middle);
    
    //odd length word logic
    if (arrWords[i].length % 2 !== 0) {
      middleChar = arrWords[i].charAt(middle);
      middle++;
    }
    let secondPart = arrWords[i].substring(middle);

    //reverse each part, and merge together
    arrWords[i] =
      firstPart.split("").reverse().join("") +
      middleChar +
      secondPart.split("").reverse().join("");
  }
  return arrWords.join(" ");
}


//First foray into ai-driven-development (lol)
//Created by passing chatgpt my original function above
//when I thought it was 'done' and asking for refactoring
//and manually refining it such that the map function it uses
//was an anon function. Then reconsidered and used a forEach. It also created an inner function before.
//11 lines of functional code. beat me by 7 lines, original was 18 lines. It also took a lot less time for it to refactor.
//Committed for posterity. The day man and machine worked together.
//Other interesting notes:
//It generated two ternarys whilst the original has one if statement
//also found that middle was sometimes not integer but worked anyway
//intriguing but it still required some manual refinements.
function foldStringGPT(str) {
  let arrWords = str.split(" ");
  arrWords.forEach((word, index) => {
    const middle = Math.floor(word.length / 2);
    const firstPart = word.slice(0, middle);
    const middleChar = (word.length % 2 === 0) ? "" : word[middle];
    const secondPart = word.slice(middle + (word.length % 2 === 0 ? 0 : 1));
    arrWords[index] = firstPart.split("").reverse().join("") + 
                      middleChar + 
                      secondPart.split("").reverse().join("");
  });
  return arrWords.join(" ");
}

module.exports = {foldString, foldStringGPT };
