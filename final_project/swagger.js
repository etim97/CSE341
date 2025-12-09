    // swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Books and Authors API',
    description: 'API for management of books and authors',
  },
  host: 'http://localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/books', './routes/authors',  './routes/publishers.js',
  './routes/categories.js']; // Your route file

swaggerAutogen(outputFile, endpointsFiles, doc);