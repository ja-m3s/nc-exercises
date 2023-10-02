const axios = require("axios");
const express = require("express");
require("dotenv").config({ path: "./.env" });

const app = express();

app.get("/api/users", (req, res) => {
  const users = require("./users.json");
  res.status(200).send({ users });
});

app.get("/api/users/:user_id/orders", (req, res, next) => {
  const { user_id } = req.params;
  axios
    .get(`${process.env.ORDER_SERVICE}/api/orders/${user_id}`)
    .then(({ data: { orders } }) => {
      res.send({ [user_id]: orders });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Server Error" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
