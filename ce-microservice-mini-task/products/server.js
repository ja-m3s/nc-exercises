const express = require("express");

const app = express();
app.use(express.json());

app.post("/api/products", (req, res, next) => {
  const body = req.body;
  if (!body.productCodes) next();

  const { productCodes } = body;
  const allProducts = require("./products.json");

  const orderedProducts = Object.entries(allProducts)
    .filter(findCodes)
    .map(([_, productName]) => productName);
  function findCodes([productCode, productName]) {
    return productCodes.includes(productCode);
  }

  res.status(200).send({ products: orderedProducts });
});

app.listen(3002, () => {
  console.log("Listening on port 3002");
});
