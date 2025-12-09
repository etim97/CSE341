const request = require('supertest');
const app = require('../server'); // Adjust the path as necessary
const { connectDB } = require("../model/connection");

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});





describe('Books API GET endpoints', () => {
  test('GET /books should return 200 and array', async () => {
    const res = await request(app).get('/books').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /books/:id with invalid id should return 400 or 404', async () => {
    // using an invalid format id to ensure validation returns 400
    await request(app).get('/books/invalid-id-format').expect(res => {
      expect([400, 404]).toContain(res.status);
    });
  });
});
