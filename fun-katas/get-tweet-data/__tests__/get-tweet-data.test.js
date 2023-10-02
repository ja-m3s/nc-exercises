const getTweetData = require('../get-tweet-data.js');

describe('getTweetData()', () => {
  test('empty tweet', () => {
    expect(getTweetData(""))
    .toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 })
  });
  
  test('My awesome tweet', () => {
    expect(getTweetData("My awesome tweet"))
    .toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
  });
  test('My awesome tweet to @northcoders', () => {
    expect(getTweetData("My awesome tweet to @northcoders"))
    .toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 })
  });
  test('My awesome tweet about #coding', () => {
    expect(getTweetData("My awesome tweet about #coding"))
    .toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 })
  });
  test('I am #coding with @northcoders I love #coding and @northcoders', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders"))
    .toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 })
  });
  test('junk', () => {
    expect(getTweetData("I*******am^^^#codi with @northcoders I love #coding and @northcoders"))
    .toEqual({ tags: ['#codi','#coding'], mentions: ['@northcoders'], tagCount: 2, mentionCount: 1, length: 68 })
  });

});