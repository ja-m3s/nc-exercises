const db = require("./");
const format = require("pg-format");

const seed = ({ shopData, treasureData }) => {
    
    return db
    .query(`DROP TABLE IF EXISTS treasures;`)
    .then(() => {
      // drop any existing shops table
      return db.query(`DROP TABLE IF EXISTS shops`);
    })
    .then(() => {
      return db.query(`CREATE TABLE shops (
		pk_shop_id BIGSERIAL PRIMARY KEY,
		shop_name VARCHAR(50) NOT NULL,
		owner VARCHAR(50) NOT NULL,
		slogan VARCHAR(1000))
	`);
    })
    .then(() => {
      return db.query(`CREATE TABLE treasures(
			pk_treasure_id BIGSERIAL PRIMARY KEY,
		   treasure_name VARCHAR(50) NOT NULL,
		   colour VARCHAR(50) NOT NULL,
			age SMALLINT NOT NULL,
		   cost_at_auction NUMERIC NOT NULL,
		  fk_shop_id BIGINT REFERENCES shops(pk_shop_id) NOT NULL
		)`);
    })
    .then(() => {
      return insertShops(shopData);
    })
    .then((shopData) => {
      return insertTreasures(shopData, treasureData);
    });
};

function insertShops(shopData) {
  let data = formatData(shopData);
  const sql = format(
    "INSERT INTO shops (shop_name, owner, slogan) VALUES %L RETURNING *",
    data
  );

  return db.query(sql);
}

function insertTreasures(shopData, treasureData) {
  let data = formatData(treasureData);
  
  data = parseTreasureData(shopData, data);
  const sql = format(
    "INSERT INTO treasures (treasure_name, colour , age, cost_at_auction, fk_shop_id) VALUES %L RETURNING *",
    data
  );
  return db.query(sql);
}

function formatData(data) {
  let formattedData = [];

  for (obj of data) {
    formattedData.push(Object.values(obj));
  }
  return formattedData;
}

function parseTreasureData(shopData, treasureData) {
  let shopLookup = {};
  for (elem of shopData.rows) {
    shopLookup[elem.shop_name] = elem.pk_shop_id;
  }

  for (let i = 0; i < treasureData.length; i++) {
    treasureData[i][4] = shopLookup[treasureData[i][4]];
  }

  return treasureData;
}
module.exports = seed;
