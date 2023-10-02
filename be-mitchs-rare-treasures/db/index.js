
const { Pool } = require('pg');

// handle using the correct environment variables here
const ENV = process.env.NODE_ENV || 'development';
const pathToCorrectEnvFile = `${__dirname}/../.env.${ENV}`;

require('dotenv').config({
  path: pathToCorrectEnvFile,
});

module.exports = new Pool();
