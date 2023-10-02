function factorial(number) {
    if(number <= 1) {
        return 1
    }
    return number * factorial(number-1)
}

function sumInt(number) {
    if(number < 1) {
        return 0
    }
    return number + sumInt(number-1)
}

function reverseStr(str) {
    if(str.length <= 1) {
        return str
    }
    let lastChar = str.substring(str.length-1) 
    let remainingStr = str.substring(0,str.length-1)

    console.log("lastChar=",lastChar,"remainingStr=",remainingStr)
    return lastChar + reverseStr(remainingStr)
}

//not sure how this could be recursively done...
function countWhiteSpace(str){
    return (str.split(' ').length)-1
}

module.exports = { factorial,sumInt,reverseStr,countWhiteSpace }