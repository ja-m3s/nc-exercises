/**The challenge is to implement a function which returns an object 
 * containing data from a given tweet.
 * We want easy access to the following data:
 * The length of the tweet.
 * The amount of hash tags ( #awesomeNorthcoders ) in the tweet 
 * The amount of mentions ( @northcoders ) in the tweet 
 * as well as an array of them.
 * We only want to return unique hash tags and handles mentioned.
 */

function getTweetData (tweet) {
  
  //Define a constructor function to hold the tweet data
  function tweetData(tweet = "") {
      
    //returns an empty array in cases where its null - match returns
    function auxFixNullArray(array){
      return (array === null) ? [] : array;
    } 
  
    //arrow function to deduplicate array
    function auxUniqify(array){
      return array.filter((item, index) => array.indexOf(item) === index);
    }

    //match a string to a regex
    function auxMatch(strTweet,regex){ 
      return strTweet.match(regex)
    }

    this.tags = auxUniqify(auxFixNullArray(auxMatch(tweet,/#[\w\d]*/g)));
    this.mentions = auxUniqify(auxFixNullArray(auxMatch(tweet,/@[\w\d]*/g)));
    this.tagCount = this.tags.length;
    this.mentionCount = this.mentions.length;
    this.length = tweet.length;
  }

  return new tweetData(tweet);
};

module.exports = getTweetData;
