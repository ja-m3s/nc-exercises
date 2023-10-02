//const server = require("../models");
const { app } = require("../app.js");
const request = require("supertest");
const db = require("../db/index");
const seed = require("../db/seed");
//import test-data
const { shopData, treasureData } = require("../db/data/test-data");

beforeEach(() => seed({ shopData, treasureData }));

afterAll(() => db.end());

describe("app", () => {
  describe("/api/treasures", () => {
    it("Responds with status 200 code", () => {
      return request(app).get("/api/treasures").expect(200);
    });
  });

  describe("/api/treasures?sort_by=age", () => {
    it("Responds with status 200 code", () => {
      return request(app).get("/api/treasures?sort_by=age").expect(200);
    });
  });

  describe("/api/treasures?sort_by=treasure_name", () => {
    it("Responds with status 200 code", () => {
      return request(app)
        .get("/api/treasures?sort_by=treasure_name")
        .expect(200);
    });
  });

  describe("/api/treasures?sort_by=cost_at_auction", () => {
    it("Responds with status 200 code", () => {
      return request(app)
        .get("/api/treasures?sort_by=cost_at_auction")
        .expect(200);
    });
  });

  describe("/api/treasures?sort_by=banana", () => {
    it("Responds with error status", () => {
      return request(app)
        .get("/api/treasures?sort_by=banana")
        .expect(400)
        .then((response) => {
          expect(response.body.msg).toBe("Bad request");
        });
    });
  });

  describe("/api/treasures default sort age asc", () => {
    it("Responds with error status", () => {
      return request(app)
        .get("/api/treasures")
        .expect(200)
        .then((response) => {
          expect(response.body.treasures).toBeSortedBy('age');
        });
    });
  });

  describe("/api/treasures?sort_by=cost_at_auction&order=desc", () => {
    it("Responds with error status", () => {
      return request(app)
        .get("/api/treasures?sort_by=cost_at_auction&order=desc")
        .expect(200)
        .then((response) => {
          expect(response.body.treasures).toBeSortedBy('cost_at_auction', { descending: true, coerce: true});
        });
    });
  });

  describe("/api/treasures?sort_by=cost_at_auction&order=desc", () => {
    it("Responds with error status", () => {
      return request(app)
        .get("/api/treasures?sort_by=cost_at_auction&order=desc")
        .expect(200)
        .then((response) => {
          expect(response.body.treasures).toBeSortedBy('cost_at_auction', { descending: true, coerce: true});
        });
    });
  });
});
