const request = require("supertest");
const app = require("../server");
const { connectDB } = require("../model/connection");

jest.setTimeout(30000);

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});

describe("TEACHER API TESTS", () => {
  test("GET /teachers returns 200 and array", async () => {
    const res = await request(app).get("/teachers");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /teachers/:id returns 200 or 404", async () => {
    const id = "67b205789078bcce4949f2df";
    const res = await request(app).get(`/teachers/${id}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});