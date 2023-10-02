const db = require("../db/connection");

exports.selectRidesByParkId = (id) => {
    console.log('in model selectRidesByParkId')
    return db.query(`SELECT * FROM rides WHERE ride_id = $1`,[id]);
};
