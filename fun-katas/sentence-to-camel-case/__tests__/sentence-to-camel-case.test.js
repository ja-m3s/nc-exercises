const { sentenceToCamelCase, camelToEnglish } = require('../sentence-to-camel-case.js');

describe('sentenceToCamelCase()', () => {
    test('Converts to upper camel', () => {
      expect(sentenceToCamelCase("this sentence", true)).toEqual('ThisSentence')
    });
    test('Converts to lower camel Desc', () => {
      expect(sentenceToCamelCase("this sentence", false)).toEqual('thisSentence')
    });
    test('Converts to lower camel Desc', () => {
      expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toEqual('ThisBiggerStrangeSentence')
    });
  });

  describe('camelToEnglish()', () => {
    test('thisBiggerStrangeSentence -> This bigger strange sentence..', () => {
      expect(camelToEnglish("thisBiggerStrangeSentence")).toEqual('This bigger strange sentence')
    });

  });