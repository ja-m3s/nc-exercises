const {morseCode, morseDecode} = require('../morse-code.js');

describe('morseCode()', () => {
  test('encode HI', () => {
    expect(morseCode('HI')).toEqual(".... ..")
  });
  test('encode HELLO', () => {
    expect(morseCode('HELLO')).toEqual(".... . .-.. .-.. ---")
  });
  test('encode NORTHCODERS', () => {
    expect(morseCode('NORTHCODERS')).toEqual("-. --- .-. - .... -.-. --- -.. . .-. ...")
  });

    test('encode GOOD MORNING NORTHCODERS', () => {
    const morse ="--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
    expect(morseCode('GOOD MORNING NORTHCODERS')).toEqual(morse)
  });
});

describe('morseDecode()', () => {
    test('decode HI', () => {
      expect(morseDecode(".... ..")).toEqual('HI')
    });
    test('decode HELLO', () => {
      expect(morseDecode(".... . .-.. .-.. ---")).toEqual('HELLO')
    });
    test('decode NORTHCODERS', () => {
      expect(morseDecode("-. --- .-. - .... -.-. --- -.. . .-. ...")).toEqual('NORTHCODERS')
    });
    test('decode GOOD MORNING NORTHCODERS', () => {
      const morse ="--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
      expect(morseDecode(morse)).toEqual('GOOD MORNING NORTHCODERS')
    });

    test('Not morse code', () => {
      const input = 'BLAHDY BLAH';
      const expectedOutput = '';
      expect(() => morseDecode(invalidInput)).toThrow();
    });

  });

  //end of my tests
  //beginning of AI-generated testing
  describe('morseCode()', () => {
    test('Encodes a simple string', () => {
      const input = 'HELLO';
      const expectedOutput = '.... . .-.. .-.. ---';
      expect(morseCode(input)).toBe(expectedOutput);
    });
  
    test('Encodes a sentence', () => {
      const input = 'HELLO WORLD';
      const expectedOutput = '.... . .-.. .-.. ---   .-- --- .-. .-.. -..';
      expect(morseCode(input)).toBe(expectedOutput);
    });
  
    test('Encodes a string with numbers', () => {
      const input = 'HELLO 123';
      const expectedOutput = '.... . .-.. .-.. ---   .---- ..--- ...--';
      expect(morseCode(input)).toBe(expectedOutput);
    });
  
    test('Encodes an empty string', () => {
      const input = '';
      const expectedOutput = '';
      expect(morseCode(input)).toBe(expectedOutput);
    });

    test('Encodes a string with punctuation', () => {
      const input = 'HELLO, WORLD!';
      const expectedOutput = '.... . .-.. .-.. --- --..--   .-- --- .-. .-.. -.. -.-.--';
      expect(morseCode(input)).toBe(expectedOutput);
    });

    
  });
  
  describe('morseDecode()', () => {
    test('Decodes a simple string', () => {
      const input = '.... . .-.. .-.. ---';
      const expectedOutput = 'HELLO';
      expect(morseDecode(input)).toBe(expectedOutput);
    });
  
    test('Decodes a sentence', () => {
      const input = '.... . .-.. .-.. ---   .-- --- .-. .-.. -..';
      const expectedOutput = 'HELLO WORLD';
      expect(morseDecode(input)).toBe(expectedOutput);
    });


  
    test('Decodes a string with numbers', () => {
      const input = '.... . .-.. .-.. ---   .---- ..--- ...--';
      const expectedOutput = 'HELLO 123';
      expect(morseDecode(input)).toBe(expectedOutput);
    });
  
    test('Decodes an empty string', () => {
      const input = '';
      const expectedOutput = '';
      expect(morseDecode(input)).toBe(expectedOutput);
    });

    test('Decodes a string with punctuation', () => {
      const input = '.... . .-.. .-.. --- --..--   .-- --- .-. .-.. -.. -.-.--';
      const expectedOutput = 'HELLO, WORLD!';
      expect(morseDecode(input)).toBe(expectedOutput);
    });
  });