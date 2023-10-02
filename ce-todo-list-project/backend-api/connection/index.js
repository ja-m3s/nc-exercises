const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DATABASE_HOST,
  port: 5432,

  // leave the below values the same
  user: "user",
  password: "password",
  database: "list_items",
});
