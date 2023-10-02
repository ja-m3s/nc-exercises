const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  it('age of dog is incremented by parameter (input - 1)', () => {
    const result = ageDog({ name: 'barker', age: 1 }, 1);
    expect(result).toEqual({ name: 'barker', age: 2 });
  });
  it('age of dog is incremented by parameter (input - 2)', () => {
    const result = ageDog({ name: 'barker', age: 1 }, 2);
    expect(result).toEqual({ name: 'barker', age: 3 });
  });
  it('original not mutated', () => {
    const dog = { name: 'wolfy', age: 10 };
    ageDog(dog, 5);
    expect(dog).toEqual({ name: 'wolfy', age: 10 });
  });
  it('new object is returned', () => {
    const dog = { name: 'wolfy', age: 10 };
    const result = ageDog(dog, 5);
    expect(result).not.toBe(dog);
  });
  it('original not mutated when parameter is negative', () => {
    const dog = { name: 'wolfy', age: 10 };
    ageDog(dog, -7);
    expect(dog).toEqual({ name: 'wolfy', age: 10 });
  });
  it('new object is returned when parameter is negative', () => {
    const dog = { name: 'wolfy', age: 10 };
    const result = ageDog(dog, -7);
    expect(result).not.toBe(dog);
  });
  it('not a dog - missing name property', () => {
    const result = ageDog({ clive: 'barker', age: 1 }, 1);
    expect(result).toEqual("Invalid Input");
  });
  it('not a dog - missing age property', () => {
    const result = ageDog({ clive: 'barker' }, 1);
    expect(result).toEqual("Invalid Input");
  });
  it('dog.age is not a number', () => {
    const result = ageDog({ clive: 'barker', age:"3" }, 1);
    expect(result).toEqual("Invalid Input");
  });
  it('num is not a number', () => {
    const result = ageDog({ clive: 'barker', age:3 }, "1");
    expect(result).toEqual("Invalid Input");
  });
  it('age of dog cannot be decreased by parameter (input - -2)', () => {
    const result = ageDog({ name: 'barker', age: 1 }, -2);
    expect(result).toEqual("Invalid Input");
  });
});
