// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'University API',
    description: 'API for managing Students, Courses, Teachers, and Enrollment',
  },
  host: 'localhost:3000', 
  schemes: ['http'],      
};

const outputFile = './swagger.json'; 

const endpointsFiles = [
  './routes/students.js',
  './routes/courses.js',
  './routes/teachers.js',
  './routes/enrollments.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);
