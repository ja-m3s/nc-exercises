const { default: axios } = require("axios");
const express = require("express");
require("dotenv").config({ path: "./.env" });

const app = express();

app.get("/api/orders/:user_id", (req, res, next) => {
  const { user_id } = req.params;
  const orders = require("./orders.json");
  const usersOrders = orders[user_id];

  if (usersOrders.length === 0) {
    res.status(400).send({ msg: "No orders found" });
  } else {
    axios
      .post(`${process.env.PRODUCT_SERVICE}/api/products`, {
        productCodes: usersOrders,
      })
      .then(({ data }) => {
        res.status(200).send({ orders: data });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "Server Error" });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
