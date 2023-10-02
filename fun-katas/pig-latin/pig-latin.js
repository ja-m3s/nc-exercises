// Please do not change the name of this function

function pigLatin(str) {
  const regex = /\b[aeiouAEIOU]\w*\b/g;

  arrWords = str.split(' ');
  for(let i = 0; i < arrWords.length;i++)
  {
    if(arrWords[i].match(regex)){
      //vowel starting word logic
      arrWords[i] = arrWords[i]+'w';
    } else {
      //consonant starting word logic
      let numCharsToSwap = lengthOfConsonantDigraph(arrWords[i])
      arrWords[i] = arrWords[i].substring(numCharsToSwap)+arrWords[i].substring(0,numCharsToSwap);
    }
    arrWords[i] += 'ay';
  }
  return arrWords.join(' ');
};

function lengthOfConsonantDigraph(word) {
  const consonantDigraphs = /^(sh|kn|ch|ph|wr|ck|ss|tch)/i;
  const match = word.match(consonantDigraphs);
  return (match === null)? 1 : match[0].length;
}

module.exports = {pigLatin, lengthOfConsonantDigraph}
