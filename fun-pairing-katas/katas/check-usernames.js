/**
 * The function checkUsernames should take an array of usernames 
 * and return true if they are all valid 
 * and false if any are not valid. 
 * A valid username:

    is at least 5 characters long
    may only contain lowercase letters, numbers and underscores
    is no longer than 20 characters
 * 
 */
function checkUsernames(arrUsernames) {

    if(arrUsernames.length === 0) {return false} 

    for(username of arrUsernames){
        console.log(username," of length ",username.length)
        if(! /^[a-z\d_]{5,20}$/.test(username)) {
            console.log("username - ",username," is invalid.")
            return false
        }
    }

    //All validation considered...
   return true;
}

module.exports = checkUsernames;
