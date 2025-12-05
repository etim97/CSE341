const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { connectDB } = require('./model/connection'); // 👈 import connection file
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const booksRoutes = require('./routes/books');
app.use('/books', booksRoutes);
const authorsRoutes = require('./routes/authors');
app.use('/authors', authorsRoutes);


// Connect to MongoDB before starting the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});


