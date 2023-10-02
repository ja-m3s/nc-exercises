const sumArgs = require('../katas/sum-args.js')

describe("sumArgs",() => {
    //First case
    test("returns 0 when passed empty args",() => { 
        expect(sumArgs()).toBe(0);
    })
})