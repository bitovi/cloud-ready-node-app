const app = require("../index.js");
const supertest = require("supertest");
const request = supertest(app);

it("GET / endpoint with 200 status", async () => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
});

it("Call an endpoint that doesn't exist with a 404 status", async () => {
  const response = await request.get("/not-an-endpoint");
  expect(response.status).toBe(404);
});
