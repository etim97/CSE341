// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'University API',
    description: 'API for managing Students and Courses',
  },
  host: 'https://cse341-7-zsb3.onrender.com',
  schemes: ['http'],
};

const outputFile = './swagger.json'; // This will be auto-generated
const endpointsFiles = ['./routes/students.js',
  './routes/courses.js',
  './routes/auth.js',
  './routes/protected.js'

];
swaggerAutogen(outputFile, endpointsFiles, doc);