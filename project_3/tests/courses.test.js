const request = require("supertest");
const app = require("../server");
const { connectDB } = require("../model/connection");

jest.setTimeout(30000);

beforeAll(async () => {
  await connectDB();
});

describe("Courses API GET endpoints", () => {
  test("GET /courses should return 200 and array", async () => {
    const res = await request(app).get("/courses").expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /courses/:id with invalid id should return 400, 404, or 500", async () => {
    await request(app)
      .get("/courses/invalid-id-format")
      .expect(res => {
        expect([400, 404, 500]).toContain(res.status);
      });
  });
});
