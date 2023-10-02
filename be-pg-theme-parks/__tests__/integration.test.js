//const server = require("../models");
const { app } = require("../app.js");
const request = require("supertest");
const db = require("../db/connection");
const seed = require("../db/seed");

beforeAll(() => seed());
afterAll(() => db.end()); 

describe("app", () => {
  describe("/api/healthcheck", () => {
    it("Responds with status 200 code", () => {
      return request(app).get("/api/healthcheck").expect(200);
    });
  });

  describe("/api/parks", () => {
    it("Responds with status 200 and array of parks", () => {
      return request(app)
        .get("/api/parks")
        .expect(200)
        .then((res) => {
          expect(res.body.parks).toEqual([
            {
              park_id: 1,
              park_name: "Thorpe Park",
              year_opened: 1979,
            },
            {
              park_id: 2,
              park_name: "Alton Towers",
              year_opened: 1980,
            },
            {
              park_id: 3,
              park_name: "Chessington World of Adventures",
              year_opened: 1987,
            },
            {
              park_id: 4,
              park_name: "Tivoli Gardens",
              year_opened: 1843,
            },
          ]);
        });
    });
  });
  describe("/api/rides/1", () => {
    it("Responds with status 200 and single ride", () => {
      return request(app)
        .get("/api/ride/1")
        .expect(200)
        .then((res) => {
          expect(res.body.ride).toEqual([
            {
              ride_id: 1,
              ride_name: "Colossus",
              year_opened: 2002,
              park_id: 1,
              votes: 5,
            },
          ]);
        });
    });
  });
});
