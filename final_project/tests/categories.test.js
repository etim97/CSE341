const request = require("supertest");
const app = require("../server");
const { connectDB } = require("../model/connection");

jest.setTimeout(30000);

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});

describe("CATEGORY API TESTS", () => {
  test("GET /categories returns 200 and array", async () => {
    const res = await request(app).get("/categories");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /categories/:id returns 200 or 404", async () => {
    const id = "67b205789078bcce4949f2df";
    const res = await request(app).get(`/categories/${id}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
