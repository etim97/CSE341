// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'University API',
    description: 'API for managing Students, Courses, Teachers, and Enrollment',
  },
  host: 'cse341-10.onrender.com', 
  schemes: ['https'],      
};

const outputFile = './swagger.json'; 

const endpointsFiles = [
  './routes/students.js',
  './routes/courses.js',
  './routes/teachers.js',
  './routes/enrollments.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc);
