const getCentury = require('../katas/get-century.js')

describe("getCentury",() => {
    //First case
    test("returns 20th century when passed 1999",() => { 
        expect(getCentury(1999)).toBe("20th");
    })

    //Second
    test("returns 21th century when passed 2001",() => { 
        expect(getCentury(2001)).toBe("21st");
    })

    //Third
    test("returns 23rd century when passed 2204",() => { 
            expect(getCentury(2204)).toBe("23rd");
    })

    //Fourth
    test("returns 22th century when passed 2101",() => { 
        expect(getCentury(2101)).toBe("22nd");
    })
   
    //Fifth
    test("returns 19th century when passed 1877",() => { 
        expect(getCentury(1877)).toBe("19th");
    })

    //Sixth
    test("returns 100th century when passed 9999",() => { 
        expect(getCentury(9999)).toBe("100th");
    })
})
