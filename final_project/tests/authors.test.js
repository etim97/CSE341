const request = require("supertest");
const  app = require('../server');
const { connectDB } = require("../model/connection");

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});


describe("AUTHORS API TESTS", () => {
  test("GET /authors returns 200 and array", async () => {
    const res = await request(app).get("/authors");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /authors/:id returns 200 or 404", async () => {
    const id = "67b204fc9078bcce4949f2d8";
    const res = await request(app).get(`/authors/${id}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
