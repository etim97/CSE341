const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbo = require('./database/connection'); // 👈 import connection file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import routes
const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);

// Connect to MongoDB before starting the server
dbo.connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
