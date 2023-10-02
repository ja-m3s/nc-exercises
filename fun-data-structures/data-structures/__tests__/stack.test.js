const { createStack } = require('../stack.js');

describe('createStack', () => {
    
    test('createStack has property quantity', () => {
        const testStack = createStack();
        expect(testStack.quantity).toEqual(0)
    })
    test('createStack has property storage', () => {
        const testStack = createStack();
        expect(testStack.storage).toEqual({})
    })
    test('createStack has property maxSize', () => {
        const testStack = createStack();
        expect(testStack.maxSize).toEqual(5)
    })

    test('createStack has property maxSize 10 when set.', () => {
        const testStack = createStack(10);
        expect(testStack.maxSize).toEqual(10)
    })

    test('createStack push item', () => {
        const testStack = createStack(10);
        testStack.push('apple');
        expect(testStack.storage).toEqual({ 1 : 'apple' })
    })

    test('createStack push items', () => {
        const testStack = createStack(10);
        testStack.push('apple');
        testStack.push('orange');
        expect(testStack.storage).toEqual({ 1 : 'apple', 2 : 'orange' })
    })

    test('createStack popped item deleted', () => {
        const testStack = createStack(10);
        testStack.push('apple');
        testStack.push('orange');
        testStack.pop();
        expect(testStack.storage).toEqual({1 : 'apple' })
    })

    test('createStack returns popped item', () => {
        const testStack = createStack(10);
        testStack.push('apple');
        testStack.push('orange');
        expect(testStack.pop()).toEqual('orange')
    })

    test('createStack empty', () => {
        const testStack = createStack(10);
        expect(testStack.isEmpty()).toEqual(true)
    })
    
    test('createStack not empty', () => {
        const testStack = createStack(10);
        testStack.push('apple');
        expect(testStack.isEmpty()).toEqual(false)
    })

    test('createStack full', () => {
        const testStack = createStack(1);
        testStack.push('apple');
        expect(testStack.isFull()).toEqual(true)
    })

    test('createStack not full', () => {
        const testStack = createStack(1);
        expect(testStack.isFull()).toEqual(false)
    })

    test('createStack peek returns top of stack', () => {
        const testStack = createStack(1);
        testStack.push('apple');
        expect(testStack.peek()).toEqual('apple')
    })
})
