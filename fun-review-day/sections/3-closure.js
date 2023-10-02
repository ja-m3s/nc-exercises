function generateMultiples(mult) {
    function genMultiples(num) {
        let multiples = [];
        for(let i = 1; i<=num;i++){
            multiples.push(mult*i)
        }
        return multiples;
      }
      return genMultiples;
}

function secureFunc(password,funcFunction) {
    function secFunc(attempt, ...args) {    
        if(password === attempt){
            return funcFunction(...args);
        }
        return 'Sorry your password is incorrect!';
    }
    return secFunc;
}

module.exports = { generateMultiples, secureFunc };
