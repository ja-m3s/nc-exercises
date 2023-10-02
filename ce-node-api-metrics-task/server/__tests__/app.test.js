const request = require("supertest");
const { app, server } = require("../app.js");

afterAll((done) => {
  server.close(done);
});

describe("GET /interesting-quote", () => {
  it("should return a random interesting quote", async () => {
    const response = await request(app).get("/interesting-quote");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("quote");
  });
});

describe("GET /random-trivia", () => {
  it("should return random trivia", async () => {
    const response = await request(app).get("/random-trivia");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("trivium");
  });
});

describe("GET /cool-fact", () => {
  it("should return a random cool fact", async () => {
    const response = await request(app).get("/cool-fact");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("fact");
  });
});
