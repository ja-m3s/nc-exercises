/*The alternateCase function should take a string and return a string. 
Every other letter either capital or lower case, 
 with a capital letter. E.g. 'hello' would become 'HeLlO' 'hello world' 
 would become 'HeLlO wOrLd'*/

//Note - run only one file npm test -- alternate-case.test.js

//Inspiration for solution from https://catonmat.net/ascii-case-conversion-trick

function alternateCase(str) {
    let result=""
    for (char of str) {
        char !== ' ' ? result += String.fromCharCode(char.charCodeAt(0) ^ 32) : result+=' ';  
    }
    return result;
}

module.exports = alternateCase;
