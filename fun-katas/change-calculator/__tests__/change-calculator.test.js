const changeCalculator = require('../change-calculator.js');

describe('changeCalculator()', () => {
    test('1', () => {
      expect(changeCalculator(1)).toEqual({'1':1})
    });
    test('2', () => {
        expect(changeCalculator(2)).toEqual({'2':1})
    });
    test('7', () => {
        expect(changeCalculator(7)).toEqual({'5':1,'2':1})
    });
    test('13', () => {
        expect(changeCalculator(13)).toEqual({'10':1,'2':1,'1':1})
    });
  });