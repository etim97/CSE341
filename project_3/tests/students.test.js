const request = require("supertest");
const  app = require('../server');
const { connectDB } = require("../model/connection");


jest.setTimeout(30000);
beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});


describe("STUDENTS API TESTS", () => {
  test("GET /students returns 200 and array", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /students/:id returns 200 or 404", async () => {
    const id = "67b204fc9078bcce4949f2d8";
    const res = await request(app).get(`/students/${id}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
