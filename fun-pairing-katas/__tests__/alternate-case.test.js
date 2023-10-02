const alternateCase = require('../katas/alternate-case.js')

describe("alternateCase",() => {
    //First case
    test("returns empty string when passed empty string",() => { 
        expect(alternateCase("")).toBe("");
    })
    //Second test
    test("returns a when A is passed",() => { 
        expect(alternateCase("a")).toBe("A");
    })

    //3rd test
    test("returns A when a is passed",() => { 
        expect(alternateCase("A")).toBe("a");
    })

    //4th test
   test("returns Aa when aA is passed",() => { 
        expect(alternateCase("Aa")).toBe("aA");
    }) 

    test("returns Hello World when passed hELLO wORLD",() => {
        expect(alternateCase("hELLO wORLD")).toBe("Hello World");
    })
})
