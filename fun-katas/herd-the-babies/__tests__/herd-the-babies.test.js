const herdTheBabies = require('../herd-the-babies.js');

describe('herdTheBabies', () => {
  it('should return "Aa" for input "aA"', () => {
    expect(herdTheBabies("aA")).toBe('Aa');
  });

  it('should return "AaB" for input "aBA"', () => {
    expect(herdTheBabies("aBA")).toBe('AaB');
  });

  it('should return "AaBbbCcc" for input "bbaBccAC"', () => {
    expect(herdTheBabies("bbaBccAC")).toBe('AaBbbCcc');
  });

  it('should return "AAAAaaBBBbbbbbb" for input "AaBbbBaAbAbbAbB"', () => {
    expect(herdTheBabies("AaBbbBaAbAbbAbB")).toBe('AAAAaaBBBbbbbbb');
  });
});