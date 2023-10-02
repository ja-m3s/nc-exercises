const express = require("express");
const cors = require("cors");
const db = require("./connection");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  console.log("health check");
  res.status(200).send({ msg: "All good!" });
});
app.get("/api/items", (req, res, next) => {
  db.query("SELECT * FROM items")
    .then(({ rows: items }) => {
      res.status(200).send({ items });
    })
    .catch(next);
});

app.post("/api/items", (req, res, next) => {
  const { body } = req;

  db.query("INSERT INTO items (title) VALUES ($1) RETURNING *;", [body.item])
    .then(({ rows: [item] }) => {
      res.status(201).send({ item });
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Database error" });
  console.log(err);
});

module.exports = app;
