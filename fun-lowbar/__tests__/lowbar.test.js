const { identity } = require('../lowbar');

// don't forget to export and import each of your new functions!

describe('identity', () => {
  test('returns the value passed as an argument', () => {
    expect(identity(3)).toBe(3);
    expect(identity('hello')).toBe('hello');
    expect(identity(true)).toBe(true);
  });
  test('return value has the same reference when passed an array or object', () => {
    const arr = [];
    expect(identity(arr)).toBe(arr);
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});
