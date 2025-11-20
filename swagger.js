// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
  },
  host: 'cse341-2-db00.onrender.com',
  schemes: ['http'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/contacts.js']; // Your route file

swaggerAutogen(outputFile, endpointsFiles, doc);