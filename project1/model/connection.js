// connect.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables


let db; // to hold the connected database

// Function to connect to MongoDB
async function connectDB() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('CSE341'); // use your actual database name here
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1); // stop app if connection fails
  }
}

// Function to return the active database
function getDB() {
  if (!db) {
    throw new Error('Database not initialized! Call connectDB first.');
  }
  return db;
}

module.exports = { connectDB, getDB };