const { map } = require('../map');

// don't forget to export and import each of your new functions!

describe('map', () => {
    test('maps returns squares of an array of numbers', () => {
        function square(n) {
            return n * n;
          }
        expect(map([1,2,3],square)).toEqual([1,4,9])
    });

    test('maps returns squares of an objects values', () => {
        function square(n) {
            return n * n;
          }
        expect(map({'a':1,'b':2,'c':3},square)).toEqual([1,4,9])
    });
});
