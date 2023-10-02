const {
  fetchTreasures,
  fetchTreasuresSortBy,
} = require("../models/treasure.js");
//TODO error handling
//TODO next block
exports.getTreasures = (req, res, next) => {
  const { sort_by, order, colour } = req.query;
  fetchTreasures(sort_by, order, colour)
    .then((result) => {
      res.status(200).send({ treasures: result });
    })
    .catch((err) => {
      next(err);
    });
};
