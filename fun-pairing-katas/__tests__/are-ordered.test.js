const areOrdered = require('../katas/are-ordered.js')

describe("areOrdered",() => {
    //First case
    test("returns false when given empty array",() => { 
        expect(areOrdered([])).toEqual(false);
    })  

    test("returns true if array is sorted",() => { 
        expect(areOrdered([1,2,3])).toEqual(true);
    }) 

    test("returns false if array is unsorted",() => { 
        expect(areOrdered([3,2,1])).toEqual(false);
    }) 

})
