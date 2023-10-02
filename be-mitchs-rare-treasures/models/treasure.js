const db = require("../db/index");

//TODO Add error handling tests for each piece of functionality on the endpoint immediately after implementing the happy-path.
exports.fetchTreasures = (sort_by, order, colour) => {
  console.log(colour)
  if(colour){
    return getTreasuresByColour(colour);
  }
  
  const validSort = new Set();
  validSort.add("age").add("treasure_name").add("cost_at_auction");

  const validOrder = new Set();
  validOrder.add("desc").add("asc");
  
  let query = `SELECT t.pk_treasure_id,t.treasure_name, t.colour,t.age, t.cost_at_auction, s.shop_name 
               FROM treasures t, shops s 
               WHERE t.fk_shop_id=s.pk_shop_id ORDER BY`;

  let sqlOrder = "";
  if (validOrder.has(order)) {
    sqlOrder = order;
  }

  if (sort_by === undefined) {
    query += " t.age ";
    query += sqlOrder;
  } else if (validSort.has(sort_by)) {
    query += ` ${sort_by} `;
    query += sqlOrder;
  } else {
    return Promise.reject({
      status: 400,
      msg: "Bad request",
    });
  }
  return db.query(query).then((result) => {
    return result.rows;
  });
};

function getTreasuresByColour(colour){
  return db.query(`SELECT colour FROM treasures WHERE colour = $1`,[colour])
  .then((res) => {
    if(res.rows.length === 0){
      return Promise.reject({
        status: 400,
        msg: `Bad Request: ${colour} is invalid input.`
      });
    }
  }).then(() => {
    return db.query(`SELECT * FROM treasures WHERE colour = $1`,[colour]);
  }).then((res) => {
    return res.rows;
  });
}

