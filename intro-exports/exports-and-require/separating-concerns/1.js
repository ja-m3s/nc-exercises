const { check, runTest } = require("../../test-api/index.js");

/* 
The function should take two objects which provide the cost, currency and exchange rate of an item
Return the total cost of the two items, in pounds, rounded to two decimal places

Example:
const item1 = {
    description:'trainers', 
    cost:50, 
    currency:'euros',
    exchangeRate:1.12
}
const item2 = {
    description:'iPhone', 
    cost:500, 
    currency:'dollar',
    exchangeRate:1.20
}
sumPurchases(item1, item2)
 returns

*/

function sumPurchases(item1, item2) {
  // remember to require in at least 1 util function help you solve this problem!
}

runTest("sumPurchases() returns sum total of item conversions", function () {
  check(
    sumPurchases(
      {
        description: "trainers",
        cost: 50,
        currency: "euros",
        exchangeRate: 1.12,
      },
      {
        description: "iPhone",
        cost: 500,
        currency: "dollar",
        exchangeRate: 1.2,
      }
    )
  ).isEqualTo(461.31);
  check(
    sumPurchases(
      {
        description: "cat food",
        cost: 1579.5,
        currency: "yen",
        exchangeRate: 157.95,
      },
      {
        description: "cat basket",
        cost: 70,
        currency: "swiss franc",
        exchangeRate: 1.11,
      }
    )
  ).isEqualTo(73.06);
});
