function sumDigits(input) {
    console.log(input," of length ",String(input).length)
    
    if( String(input).length <= 1) { 
        return input; 
    }
   
    const arrChars = String(input).split("");
    console.log("arrChars = ",arrChars)

    //Bad way - look back at regex notes, why didn't it work when I tried it!?
    const arrFilteredChars = arrChars.filter(num => Number(num) >=0 && Number(num) <=9 )
    console.log("arrFilteredChars = ",arrFilteredChars)

    return arrFilteredChars.reduce((a, b) => Number(a) + Number(b), 0);
}

module.exports = sumDigits;
