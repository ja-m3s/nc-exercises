/* var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  _.filter(users, function(o) { return !o.active; });
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  _.filter(users, { 'age': 36, 'active': true });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.filter(users, ['active', false]);
  // => objects for ['fred']
   
  // The `_.property` iteratee shorthand.
  _.filter(users, 'active');
  // => objects for ['barney']  */ 

// don't forget to export and import each of your new functions!

// myFilter.test.js
const myFilter = require('../myFilter');

describe('myFilter', () => {
  test('empty array returns an empty array', () => {
    expect(myFilter([], [])).toEqual([]);
  });

  test('filter to get only numbers', () => {
    expect(
      myFilter(
        [2, 'northcoder', null, { name: 'Syed' }, undefined, 2, 'mango', true],
        (value) => typeof value === 'number'
      )
    ).toEqual([2, 2]);
  });



  test("filter objects where the active property is false", () => {
    expect(
      myFilter(
        [
          { 'user': 'barney', 'age': 36, 'active': true },
          { 'user': 'fred', 'age': 40, 'active': false }
        ],
        (obj) => !obj.active // This is the predicate function
      )
    ).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  });
  
  test("should filter objects where age is 36 and active is true using _.matches shorthand", () => {
    expect(
      myFilter(
        [
          { 'user': 'barney', 'age': 36, 'active': true },
          { 'user': 'fred', 'age': 40, 'active': false }
        ],
        { 'age': 36, 'active': true } // This is the predicate function (matches shorthand)
      )
    ).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  });

});
