const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./model/connection'); // 👈 import connection file

const app = express();
const port = process.env.PORT || 3000;

//const swaggerUi = require('swagger-ui-express');
//const swaggerJsDoc = require('swagger-jsdoc');

app.use(cors());
app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Import routes
const studentsRoutes = require('./routes/students');
app.use('/students', studentsRoutes);

const coursesRoutes = require('./routes/courses');
app.use('/courses', coursesRoutes);

// Connect to MongoDB before starting the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
