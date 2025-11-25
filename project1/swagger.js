// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing Students and Courses',
  },
  host: 'https://cse341-4-0shb.onrender.com',
  schemes: ['http'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/students.js', './routes/courses.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);