function identity(arg) { return arg}

function identityF(args) { return function(){ return args}}

function add(num1,num2) { return num1+num2}

function subtract(num1,num2) { return num1-num2}

function multiply(num1,num2) {return num1*num2}

function increment(num) {return num++}

//could be rewritten to use add above...
function addF(num) {
  let lNum = num;
  function fAdd (num){ return Number(lNum)+Number(num)}
  return fAdd
}

function curry(func,num2) {
    function lFunc(num1){
      return func(num1,num2)
    }
    return lFunc
}

function liftF(func) {
  function innerFun(num1){   function secondInnerFun(num2){
     return func(num1,num2)
   }
    return secondInnerFun
  }
  return innerFun
 }

function once(func) {
  let maxCalls = 1
  
  function limitedFunc(a, b) {
    let value = ''
    if (--maxCalls >= 0){
    	value = func(a, b); 
    	return value
    };
    return value;
  }
  return limitedFunc;
}

function twice(func) {
  
  
    function firstLayer(num) {

        return func(num,num)
      
    }
    console.log(firstLayer)
    return firstLayer
}

function composeU(func1, func2) {
  function firstLayer(num) {
    let result = func1(num)
    return func2(result)

  }
  return firstLayer
  }


function composeB(func1, func2) {
  function firstLayer(num1, num2, num3) {
    let result = func1(num1, num2)
    return func2(result,num3)
  }
  return firstLayer
}

function limit(func,num) {
  let count = 0;
  let firstValue = 0;
  if (count <= num) {
    firstValue = func;
    console.log("firstValue initially set to", firstValue);
    count++;
  }
  return firstValue;
}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  once,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
