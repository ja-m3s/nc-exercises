const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('Given empty string returns an []', () => {
    expect(dnaPairs("")).toEqual([])
  });
  test('Given G string returns an GC', () => {
    expect(dnaPairs("G")).toEqual([["G","C"]])
  });
  test('Given AG string returns an AT,GC', () => {
    expect(dnaPairs("AG")).toEqual([["A","T"],["G","C"]])
  });
  test('Given AG string returns an AT,GC', () => {
    expect(dnaPairs("AGCT")).toEqual([["A","T"],["G","C"],["C","G"],["T","A"]])
  });
});
