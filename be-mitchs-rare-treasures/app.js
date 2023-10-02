const { getTreasures } = require("./controllers/controller.js");
const express = require("express");
const app = express();
const port = 9090;

//app.use(express.JSON);

app.get("/api/treasures", getTreasures);

app.listen(9090, () => {
  console.log(`Server is listening on port 9090...`);
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});
module.exports = { app };
