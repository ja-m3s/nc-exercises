/** The challenge is to implement a function that calculates the coins you would use to give 
 * a customer their change in a shop. The function takes one argument, which is the amount of 
 * change needed, in pence. The function should always return an object.
 */
function changeCalculator (num) {
  const coinage = ['100','50','20','10','5','2','1'];
  let change = {};
  let remainder = num;
  for(const coin of coinage){
    //find how many times coin goes into num
    let numberOfCoinsInNum = Math.floor(remainder / Number(coin));
    //if greater than 0, add to change
    if(numberOfCoinsInNum > 0){ change[coin] = numberOfCoinsInNum }; 
    //calculate remaining pence to calculate
    remainder = remainder % coin;
  }
  return change;
};

module.exports = changeCalculator;
