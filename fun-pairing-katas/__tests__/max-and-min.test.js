const maxAndMin = require('../katas/max-and-min.js')

describe("max",() => {
    //First case
    test("returns 0 when passed empty array",() => { 
        expect(maxAndMin.max([])).toBe(0);
    })

    //Second
    test("returns single element when passed array of one value",() => { 
        expect(maxAndMin.max([1])).toBe(1);
    })

    //Third
    test("returns max element when passed array of multiple value",() => { 
        expect(maxAndMin.max([1,2,3])).toBe(3);
    })
})



describe("min",() => {
    //First case
    test("returns 0 when passed empty array",() => { 
        expect(maxAndMin.min([])).toBe(0);
    })
    //Second
    test("returns single element when passed array of one value",() => { 
        expect(maxAndMin.min([1])).toBe(1);
    })
    //Third
    test("returns min element when passed array of multiple value",() => { 
        expect(maxAndMin.min([8,29,3,4,797,321])).toBe(3);
    })
})