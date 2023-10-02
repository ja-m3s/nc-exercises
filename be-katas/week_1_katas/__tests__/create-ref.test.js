const createRef = require('../create-ref.js');

describe('createRef', () => {
  it('one object in array', () => {
    const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' }
    ];
    expect(createRef(people)).toEqual({ vel: '01134445566'});
  });
  it('multiple objects in array', () => {
    const people = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    expect(createRef(people)).toEqual({ vel: '01134445566', ant: '01612223344', mitch: '07777777777' });
  });
  it('multiple objects in array, janky properties', () => {
    const people = [
      { nae: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    expect(createRef(people)).toEqual({ "mitch": "07777777777"});
  });
  it('new songs, generic params', () => {
    const songs = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
    expect(createRef(songs, 'track', 'artist')).toEqual({ '11:11': 'Dinosaur Pile-Up', 'Powder Blue': 'Elbow' });
  });
  it('no mutating of songs', () => {
    const songs = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
    createRef(songs, 'track', 'artist')
    expect(songs).toEqual([
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ]);
  });
});



