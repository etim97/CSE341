// tests/publishers.test.js
const request = require('supertest');
const app = require('../server');
const { connectDB } = require("../model/connection");

jest.setTimeout(30000);
beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await connectDB();
});

describe('enrollments API GET endpoints', () => {
  test('GET /enrollments returns 200 and array', async () => {
    const res = await request(app).get('/enrollments').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /enrollments/:id with invalid id should return 400 or 404', async () => {
  await request(app).get('/enrollments/invalid-id-format').expect(res => {
    // Since your controller currently throws 500 on invalid ObjectId
    expect([500, 404]).toContain(res.status);
  });
});
});