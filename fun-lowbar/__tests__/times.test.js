const { times } = require('../times');

// don't forget to export and import each of your new functions!

describe('times', () => {
  test('given 0, and blank function returns empty', () => {
    function testFunc(){};
    expect(times(0,testFunc)).toEqual([])
  });

  //_.times(3, String);
  // => ['0', '1', '2']
  test('given 3, and a string, returns ', () => {
    expect(times(3,"a")).toEqual(['a','a','a'])
  });

  test('given 3, and hello, returns ', () => {
    console.log("hello")
    expect(times(3,"hello")).toEqual(["hello","hello","hello"])
  });

  test('given constant 0, and constant 0, returns ', () => {
     expect(times(3, 9)).toEqual([9,9,9])
  });
  
});
