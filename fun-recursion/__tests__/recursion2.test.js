const { deepTotal, deepIncludes, countObjects, deepFreeze } = require("../recursion2.js");

describe('deepTotal', () => {
    test('shallow array returns correct sum', () => {
        expect(deepTotal([1,2,3])).toEqual(6)
    })
    test('deep array returns correct sum', () => {
        expect(deepTotal([1, [5, 10]])).toEqual(16)
    })
    test('deeper array returns correct sum', () => {
        expect(deepTotal([3, [[6]], 9])).toEqual(18)
    })
})


describe('deepIncludes', () => {
    test('deepIncludes returns false when passed value not in array', () => {
        expect(deepIncludes([[1,2],3])).toBe(false)
    })
    test('deepIncludes returns true when passed value in array', () => {
        expect(deepIncludes(["toast", ["avocado", ["chilli flakes"]]],"avocado")).toBe(true)
    })
})

describe('countObjects', () => {
    test('countObjects returns count when passed value not in array', () => {
        expect(countObjects({innerObj:{}, innerObj2: {}})).toBe(3)
    })
    test('countObjects returns count when passed value not in array', () => {
        expect(countObjects({innerObj:{innerObj3:{}}, innerObj2: {}})).toBe(4)
    })
})


describe('deepFreeze', () => {
    test('deepFreeze returns count when passed value not in array', () => {
        //set up obj
        let result = {'name': 'James'}
        //make frozen
        deepFreeze(result)
        //try and change, vars should now be consts
        result.name = 'Jonny'

        expect(deepFreeze(result.name)).toBe('James')
    })

    test.only('deepFreeze returns count when passed value not in array', () => {
        //set up obj
        let result = {'innerObj': {'name':'innerJames'}}
        //make frozen
        deepFreeze(result)
        //try and change, vars should now be consts
        result.innerObj.name = 'innerJonny'

        expect(deepFreeze(result.innerObj.name)).toBe('innerJames')
    })

    test.only('deepFreeze returns count when passed value not in array', () => {
        //set up obj
        let result = [1,2,3]
        //make frozen
        deepFreeze(result)
        //try and change, vars should now be consts
        result[0]=3

        expect(deepFreeze(result)).toEqual([1,2,3])
    })

    test('deepFreeze returns count when passed value not in array', () => {
        //set up obj
        let result = {name: 1}
        //make frozen
        deepFreeze(result)
        //try and change, vars should now be consts
        result.name = 2

        expect(deepFreeze(result.name)).toBe(1)
    })
})