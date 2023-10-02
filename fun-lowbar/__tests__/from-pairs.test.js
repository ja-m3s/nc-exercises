const { fromPairs } = require('../from-pairs');

// don't forget to export and import each of your new functions!

describe('fromPairs', () => {
  test('empty array returns an empty object', () => {
    expect(fromPairs([])).toEqual({});
    
  });

  //second test
  test('returns object of array size 1', () => {
    expect(fromPairs([["a",1]])).toEqual({"a":1}); 
  });

  test('multiple arrays return object of multiple pairs', () => {
    expect(fromPairs([["a",1],["b",2]])).toEqual({"a":1,"b":2}); 
  });
  
});
