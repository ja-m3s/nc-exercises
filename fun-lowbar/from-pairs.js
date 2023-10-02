
//inputs - [[a,1],[b,2],[c,3]]
//object -{ a:1,b:2, c:3}

function fromPairs(arrayOfPairs) {
    let result = {};
    for(const[key,value] of arrayOfPairs){
        result[key] = value;
    }
    return result;   
}
  
module.exports = { fromPairs };
  