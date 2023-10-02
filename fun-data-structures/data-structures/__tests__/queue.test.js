const { createQueue } = require('../queue.js');

describe('createQueue', () => {
    
    test('createQueue has property front', () => {
        const testQueue = createQueue();
        expect(testQueue.front).toEqual(0)
    })

    test('createQueue has property back', () => {
        const testQueue = createQueue();
        expect(testQueue.back).toEqual(0)
    })
    test('createQueue has property storage', () => {
        const testQueue = createQueue();
        expect(testQueue.storage).toEqual({})
    })
    test('createQueue has property maxSize', () => {
        const testQueue = createQueue();
        expect(testQueue.maxSize).toEqual(5)
    })

    test('createQueue has property maxSize 10 when set.', () => {
        const testQueue = createQueue(10);
        expect(testQueue.maxSize).toEqual(10)
    })

    test('createQueue enqueue item', () => {
        const testQueue = createQueue(10);
        testQueue.enqueue('apple');
        expect(testQueue.storage).toEqual({ 1 : 'apple' })
    })

    test('createQueue enqueue items', () => {
        const testQueue = createQueue(10);
        testQueue.enqueue('apple');
        testQueue.enqueue('orange');
        expect(testQueue.storage).toEqual({ 1 : 'apple', 2 : 'orange' })
    })

    test('createQueue dequeued item deleted', () => {
        const testQueue = createQueue(10);
        testQueue.enqueue('apple');
        testQueue.enqueue('orange');
        testQueue.dequeue();
        expect(testQueue.storage).toEqual({2 : 'orange' })
    })

    test('createQueue returns dequeued item', () => {
        const testStack = createQueue(10);
        testStack.enqueue('apple');
        testStack.enqueue('orange');
        expect(testStack.dequeue()).toEqual('apple')
    })

    test('createQueue empty', () => {
        const testStack = createQueue(10);
        expect(testStack.isEmpty()).toEqual(true)
    })
    
    test('createQueue not empty', () => {
        const testStack = createQueue(10);
        testStack.enqueue('apple');
        expect(testStack.isEmpty()).toEqual(false)
    })

    test('createQueue full', () => {
        const testStack = createQueue(1);
        testStack.enqueue('apple');
        expect(testStack.isFull()).toEqual(true)
    })

    test('createQueue not full', () => {
        const testStack = createQueue(1);
        expect(testStack.isFull()).toEqual(false)
    })

    test('createQueue peek returns top of stack', () => {
        const testStack = createQueue(1);
        testStack.enqueue('apple');
        expect(testStack.peek()).toEqual('apple')
    })
})
