const fetchParks = require("../models/parks.js");
const fetchRides = require("../models/rides.js");

exports.getHealthCheck = (req,res) => {
    console.log('in controller');
    msg= 'Server up'
    res.status(200).send({ msg });
}

exports.getParks = (req,res) => {
    console.log('in controller');
    fetchParks.selectParks().then((result) => {
        console.log(result);
        res.status(200).send({ 'parks' : result.rows });
    });
}

exports.getRide = (req,res) => {
    console.log('in controller');
    console.log(req);
    const { ride_id } = req.params;
    fetchRides.selectRidesByParkId(ride_id).then((result) => {
        console.log(result);
        res.status(200).send({ 'ride' : result.rows });
    });
}