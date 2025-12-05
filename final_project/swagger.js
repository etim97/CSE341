    // swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Books and Authors API',
    description: 'API for management of books and authors',
  },
  host: 'cse341-8-0rxn.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/books', './routes/authors']; // Your route file

swaggerAutogen(outputFile, endpointsFiles, doc);