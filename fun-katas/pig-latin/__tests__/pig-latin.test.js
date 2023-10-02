const{pigLatin, lengthOfConsonantDigraph} = require('../pig-latin.js');

describe('pigLatin()', () => {
    test('append word starting with consonant with ay and replace first consonant with \'', () => {
      expect(pigLatin("northcoders")).toEqual('orthcodersnay')
    });
    test('works for all ', () => {
      expect(pigLatin("sheffield")).toEqual('effieldshay')
    });
    test('vowel starting words appended with way', () => {
      expect(pigLatin("algorithm")).toEqual('algorithmway')
    });
    test('vowel capital starting words appended with way', () => {
      expect(pigLatin("Algorithm")).toEqual('Algorithmway')
    });
    test('longer sentence', () => {
      expect(pigLatin("keep on coding")).toEqual('eepkay onway odingcay')
    });
    test('longer sentence testing digraphs', () => {
      expect(pigLatin("tchibo coffee sucks")).toEqual('ibotchay offeecay uckssay')
    });
  });

  describe('lengthOfConsonantDigraph', () => {
    test('should return true for words starting with consonant digraphs', () => {
      expect(lengthOfConsonantDigraph("shiny")).toBe(2);
      expect(lengthOfConsonantDigraph("knight")).toBe(2);
      expect(lengthOfConsonantDigraph("check")).toBe(2);
      expect(lengthOfConsonantDigraph("phonic")).toBe(2);
      expect(lengthOfConsonantDigraph("ssr")).toBe(2);
      expect(lengthOfConsonantDigraph("tchunks")).toBe(3);
    });
  });