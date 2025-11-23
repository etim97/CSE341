// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
  },
  host: 'https://cse341-3-821e.onrender.com/',
  schemes: ['http'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/students.js']; // Your route file

swaggerAutogen(outputFile, endpointsFiles, doc);