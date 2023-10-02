const { parks, rides, stalls } = require("./data/index.js");

const db = require("./connection");
const format = require("pg-format");

function seed() {
    return db
        .query("DROP TABLE IF EXISTS rides;")
        .then(() => {
            return db.query("DROP TABLE IF EXISTS stalls;");
        })
        .then(() => {
            return db.query("DROP TABLE IF EXISTS foods;");
        })
        .then(() => {
            return db.query("DROP TABLE IF EXISTS stalls_foods;");
        })
        .then(() => {
            return db.query("DROP TABLE IF EXISTS parks;");
        })
        .then(() => {
            return createParks();
        })
        .then(() => {
            return createRides();
        })
        .then(() => {
            return insertParks();
        })
        .then((data) => {
            return insertRides(data);
        });
}

function createParks() {
    /* Create your parks table in the query below */
    return db.query(`CREATE TABLE parks 
  (park_id SERIAL PRIMARY KEY, 
   park_name VARCHAR NOT NULL, 
   year_opened SMALLINT NOT NULL,
   annual_attendance INT NOT NULL)`);
}

function createRides() {
    /* Create your parks table in the query below */
    return db.query(`CREATE TABLE rides 
  (ride_id SERIAL PRIMARY KEY, 
   ride_name VARCHAR NOT NULL,
   year_opened SMALLINT NOT NULL,
   park_id INT REFERENCES parks (park_id) NOT NULL,
   votes INT NOT NULL)`);
}

function insertParks() {
    const data = formatData(parks);
    sql = format(
        "INSERT INTO parks (park_name, year_opened, annual_attendance) VALUES %L RETURNING *",
        data
    );
    return db.query(sql);
}

function insertRides(parkData) {
    let data = formatData(rides);
    data = parseRideData(parkData, data)
    const sql = format(
        "INSERT INTO rides (ride_name, year_opened, park_id, votes) VALUES %L RETURNING *",
        data
    );
    return db.query(sql);
}

function formatData(data) {
    let formattedData = [];

    for (obj of data) {
        formattedData.push(Object.values(obj));
    }
    return formattedData;
}

function parseRideData(parkData, rideData){
    let parkLookup = {};
    console.log(parkData)
    console.log(rideData)
    for(elem of parkData.rows){
        parkLookup[elem.park_name] = elem.park_id;
    }
    
    for (let i = 0; i < rideData.length; i++) {
        rideData[i][2] = parkLookup[rideData[i][2]];
    }
    
    return rideData;
}
module.exports = seed;
