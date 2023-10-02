const { factorial,sumInt,reverseStr,countWhiteSpace } = require("../recursion.js");

describe('factorial', () => {
    test('factorial called with 0', () => {
        expect(factorial(0)).toEqual(1)
    })
    test('factorial called with 1', () => {
        expect(factorial(1)).toEqual(1)
    })
    test('factorial called with 2', () => {
        expect(factorial(2)).toEqual(2)
    })
    test('factorial called with 4', () => {
        expect(factorial(4)).toEqual(24)
    })
})

describe('sumInt', () => {
    test('sumInt called with 0', () => {
        expect(sumInt(0)).toEqual(0)
    })
    test('sumInt called with 1', () => {
        expect(sumInt(1)).toEqual(1)
    })
    test('sumInt called with 4', () => {
        expect(sumInt(4)).toEqual(10)
    })
    test('sumInt called with 10', () => {
        expect(sumInt(10)).toEqual(55)
    })

   // test('sumInt called with 100000', () => {
    //    expect(sumInt(100000)).toEqual(55)
    //})
})


describe('countWhiteSpace', () => {
    test('countWhiteSpace called with empty string', () => {
        expect(countWhiteSpace('')).toEqual(0)
    })

    test('countWhiteSpace called with r', () => {
        expect(countWhiteSpace('r')).toEqual(0)
    })
    test('countWhiteSpace called with hello', () => {
        expect(countWhiteSpace('hello')).toEqual(0)
    })
    test('countWhiteSpace called with katherine rules', () => {
        expect(countWhiteSpace('katherine rules')).toEqual(1)
    })
    test('countWhiteSpace called with katherine rules', () => {
        expect(countWhiteSpace('bing bang boop')).toEqual(2)
    })
})

