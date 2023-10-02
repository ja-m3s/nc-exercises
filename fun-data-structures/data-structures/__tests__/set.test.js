const { createSet } = require('../set.js');

describe('createSet', () => {
    
    test('createSet has property front', () => {
        const testSet = createSet();
        expect(testSet.size).toEqual(0)
    })
    test('createSet has property storage', () => {
        const testSet = createSet();
        expect(testSet.storage).toEqual([])
    })
    test('createSet has property maxSize', () => {
        const testSet = createSet();
        expect(testSet.maxSize).toEqual(5)
    })
    test('createSet has property maxSize 10 when set.', () => {
        const testSet = createSet(10);
        expect(testSet.maxSize).toEqual(10)
    })
})

describe('add', () => {
    
    test('add adds element', () => {
        const testSet = createSet();
        const testElement = 7
        testSet.add(testElement);
        expect(testSet.storage).toEqual([7])
    })

    test('add increments size', () => {
        const testSet = createSet();
        const testElement = 7
        testSet.add(testElement);
        expect(testSet.size).toEqual(1)
    })
})

describe('del', () => {
    
    test('del deletes element', () => {
        const testSet = createSet();
        const testElement = "7"
        testSet.add(testElement);
        testSet.del(testElement)
        expect(testSet.storage).toEqual([])
    })

    test('del deincrements size', () => {
        const testSet = createSet();
        const testElement = "7"
        testSet.add(testElement);
        testSet.del(testElement)
        expect(testSet.size).toEqual(0)
    })
})


describe('union', () => {
    
    test('union finds common element', () => {
        const testSet = createSet();
        const testSet2 = createSet();
    
        testSet.add(1);
        testSet.add(2)
        testSet.add(3)
        testSet2.add(1)
        testSet2.add(2)
        testSet2.add(4)

        const testSet3 = testSet.union(testSet2)
        expect(testSet3.storage).toEqual([1,2,3,4])
        expect(testSet3.size).toEqual(4)
    })
})

describe('intersection', () => {
    
    test('intersection finds elements not in other set', () => {
        const testSet = createSet();
        const testSet2 = createSet();
    
        testSet.add(1);
        testSet.add(2)
        testSet.add(3)
        testSet2.add(1)
        testSet2.add(2)
        testSet2.add(4)

        const testSet3 = testSet.intersection(testSet2)
        expect(testSet3.storage).toEqual([1,2])
        expect(testSet3.size).toEqual(2)
    })
})

describe('has', () => {
    
    test('has finds when element there', () => {
        const testSet = createSet();
        const testElement = "7"
        testSet.add(testElement);
        expect(testSet.has(testElement)).toEqual(true)
    })
    test('has finds when element not there', () => {
        const testSet = createSet();
        const testElement = "7"
        expect(testSet.has(testElement)).toEqual(false)
    })
})
