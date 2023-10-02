const { Pool } = require("pg");

console.log(process);

const connection = new Pool();

connection.query("select * from s_bookshop.t_books").then((result) => {
  console.log(result);
});

connection.end();

//NOTES
/* needs to use parameterized querys
and need to figure out how to pass password. - fixed, requirement .pgpass in $HOME
called like PGDATABASE=db_bookshop PGPASSWORD=<password> node connection.js */
