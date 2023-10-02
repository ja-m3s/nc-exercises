const db = require("../db/connection");

exports.selectParks = () => {
    console.log('in model selectParks')
    return db.query(`SELECT park_id,park_name, year_opened FROM parks`);
};

exports.updateParkById = () => {};

exports.removeParkById = () => {};
