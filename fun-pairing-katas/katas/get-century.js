/*

The function getCentury should take a year as a number and return the century.

E.g. 1999 should return '20th' 2004 should return '21st' 1877 should return '19th'

It should work up to and including the year 9,999 (the '100th' century)


*/ 

function getCentury(year) {
    let ending = "th";
    let century=String(Math.floor((year+100)/100))
   
    if(century.endsWith(1)){ending="st"}
    if(century.endsWith(2)){ending="nd"}
    if(century.endsWith(3)){ending="rd"}

    //st,nd,rd,th,th,th,th,th,th,th,
    return century+ending;
}


module.exports = getCentury;
