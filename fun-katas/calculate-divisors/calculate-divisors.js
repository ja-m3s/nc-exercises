// Please do not change the name of this function
/**
 * The challenge is to implement a function which adds all 
 * the multiples of three and five below a certain number
 * 
 * Examples
 * If we list all the numbers below 12 that are multiples of 3 or 5,
 *  we get 3, 5, 6, 9 and 10. The sum of these multiples is 33.
 * Here are some examples below. */

function calculateDivisors(num) {
  //todo.
  let sum=0;
  for(let i = 0; i < num; i++) {
    if(i %3 === 0 || i %5 === 0){
      sum+=i;
    }
  }
  return sum;
}

module.exports = calculateDivisors;
