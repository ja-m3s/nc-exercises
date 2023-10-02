function times(n, func) {
    //if( x === []){ return [];}

    let result = [];
    for(i=0; i < n; i++){
        result.push(func)
    }
    return result;   
  }
  
  module.exports = { times };
  