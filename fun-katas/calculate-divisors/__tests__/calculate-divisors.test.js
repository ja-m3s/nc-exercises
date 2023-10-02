const calculateDivisors = require('../calculate-divisors.js');

describe('calculateDivisors()', () => {
    //calculateDivisors(1);
    // should return 0
    test('1', () => {
        expect(calculateDivisors(1))
        .toEqual(0)
      });
    //calculateDivisors(1);
    // should return 0
    test('5', () => {
        expect(calculateDivisors(5))
        .toEqual(3)
      });
    //calculateDivisors(1);
    // should return 0
    test('6', () => {
        expect(calculateDivisors(6))
        .toEqual(8)
      });
    //calculateDivisors(1);
    // should return 0
    test('10', () => {
        expect(calculateDivisors(10))
        .toEqual(23)
      });
    //calculateDivisors(1);
    // should return 0
    test('12', () => {
        expect(calculateDivisors(12))
        .toEqual(33)
      });
});