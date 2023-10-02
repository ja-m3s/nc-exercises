const rotateArray = require('../rotate-array.js');

describe('rotateArray', () => {
  it('should return the array unchanged if the number is zero', () => {
    const arr = [1, 2, 3];
    const rotations = 0;
    expect(rotateArray(arr, rotations)).toEqual([1, 2, 3]);
  });

  it('should return the array rotated x times to the right for positive numbers', () => {
    const arr = [1, 2, 3];
    const rotations = 1;
    expect(rotateArray(arr, rotations)).toEqual([3, 1, 2]);
  });

  it('should return the array rotated x times to the right for positive numbers (larger array)', () => {
    const arr = [1, 2, 3, 4, 5];
    const rotations = 3;
    expect(rotateArray(arr, rotations)).toEqual([3, 4, 5, 1, 2]);
  });

  it('should return the array rotated x times to the left for negative numbers', () => {
    const arr = [1, 2, 3];
    const rotations = -1;
    expect(rotateArray(arr, rotations)).toEqual([2, 3, 1]);
  });

  it('should return the array rotated x times to the left for negative numbers (larger array)', () => {
    const arr = [1, 2, 3, 4, 5];
    const rotations = -3;
    expect(rotateArray(arr, rotations)).toEqual([4, 5, 1, 2, 3]);
  });
});

