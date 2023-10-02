const {getHealthCheck, getParks, getRide } = require("./controllers/controller.js");

const express = require("express");
const app = express();
const port = 9090;

//app.use(express.JSON);

app.get("/api/healthcheck", (req, res) => {
    getHealthCheck(req,res);
});

app.get("/api/parks", (req, res) => {
    getParks(req,res);
});

app.get("/api/ride/:ride_id", (req, res) => {
    getRide(req,res);
});

app.listen(9090, () => {
  console.log(`Server is listening on port 9090...`);
});


module.exports = { app }