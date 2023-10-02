const countVeg = require('../katas/count-veg');

describe("countVeg",() => {
  test("return count of veg",() => { 
    expect(countVeg([
        {name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Carrot', type: 'root', quantity: 5},
        {name: 'Onion', type: 'bulb', quantity: 3},
        {name: 'Chard', type: 'leaf', quantity: 3},
        {name: 'Runner beans', type: 'legume', quantity: 8}
      ], "root")).toBe(9)
  })
})

//Note - with this one, I jumped ahead a bit too much writing the 'most advanced' test
// then writing the function to pass the test.
//After consultation with Rayhaan, I should have
//broken this down further, progressing through the simplest cases until 
//reaching this point instead i.e. true TDD. 
