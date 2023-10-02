/** The challenge is to implement a function which takes a sentence 
and converts it to upper or lower camel case.
The function takes two arguments; the sentence, and a boolean, true if UpperCamelCase is to be returned and false if lowerCamelCase is to be returned.
*/
function sentenceToCamelCase (sentence,upperCamel) {
  const UpperCamelCaseSentence = sentence.split(' ').map((element) => {
    return element.substring(0,1).toUpperCase()+element.substring(1);
  }).join('');

  if(upperCamel){  
      return UpperCamelCaseSentence;
  }
  return UpperCamelCaseSentence.substring(0,1).toLowerCase()+UpperCamelCaseSentence.substring(1)

}

function camelToEnglish(sentence){
  //convert first character to uppercase, then split using a regex
  //which find the first uppercase, 
  //and then gets all letters after it which are lowercase
  //then rejoin array into a string
  let englishSentence = (sentence.substring(0,1).toUpperCase()+sentence.substring(1)).match(/([A-Z][a-z]+)/g).join(' ')
  //convert all character to lowercase after the first char and 
  //return it
  return englishSentence.substring(0,1)+englishSentence.substring(1).toLowerCase();
}

module.exports = {sentenceToCamelCase, camelToEnglish};
