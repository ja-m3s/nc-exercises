/* make sure you write your tests for your utils functions in here :eyes: */
const parseRideData = require('../db/seed.js');

describe('parseRideData', () => {
    it('should work fine', () => {
        rideData = [
            [ 'Colossus', 2002, 'Thorpe Park', 5 ],
            [ 'Stealth', 2006, 'Thorpe Park', 4 ],
            [ 'Loggers Leap', 1989, 'Thorpe Park', 9 ],
            [ 'Mr Monkeys Banana Ride', 1994, 'Thorpe Park', 5 ],
            [ 'Tidal Wave', 2000, 'Thorpe Park', 1 ],
            [ 'Rocky Express', 1989, 'Thorpe Park', 5 ],
            [ 'Nemesis', 1994, 'Alton Towers', 5 ],
            [ 'The Smiler', 2013, 'Alton Towers', 1 ],
            [ 'Rita', 2005, 'Alton Towers', 5 ],
            [ 'Congo River Rapids', 1994, 'Alton Towers', 3 ],
            [ 'Enterprise', 1984, 'Alton Towers', 5 ],
            [ 'Gallopers Carousel', 1991, 'Alton Towers', 7 ],
            [ 'Rattlesnake', 1998, 'Chessington World of Adventures', 11 ],
            [ 'Tiger Rock', 2018, 'Chessington World of Adventures', 3 ],
            [ 'KOBRA', 2010, 'Chessington World of Adventures', 1 ],
            [ 'Tiny Truckers', 1994, 'Chessington World of Adventures', 2 ],
            [ 'The Demon', 2004, 'Tivoli Gardens', 8 ],
            [ 'The Caravan', 1974, 'Tivoli Gardens', 1 ],
            [ 'The Bumper Cars', 1926, 'Tivoli Gardens', 25 ],
            [ 'The Little Pilot', 1990, 'Tivoli Gardens', 6 ]
          ];
        parkData = {
            rows: [
              {
                park_id: 1,
                park_name: 'Thorpe Park',
                year_opened: 1979,
                annual_attendance: 1700000
              },
              {
                park_id: 2,
                park_name: 'Alton Towers',
                year_opened: 1980,
                annual_attendance: 2520000
              },
              {
                park_id: 3,
                park_name: 'Chessington World of Adventures',
                year_opened: 1987,
                annual_attendance: 1400000
              },
              {
                park_id: 4,
                park_name: 'Tivoli Gardens',
                year_opened: 1843,
                annual_attendance: 3972000
              }
            ]
          };
          expect(parseRideData(parkData, rideData)).toEqual([[ 'Colossus', 2002, 4, 5 ]])
    });
   
});