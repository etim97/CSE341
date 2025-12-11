const { body } = require('express-validator');

const createEnrollmentValidation = [
  body('courseTitle')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Course title must be at least 3 characters'),

  body('semester')
    .isString()
    .isIn(['Fall', 'Winter', 'Spring', 'Summer'])
    .withMessage('Semester must be one of: Fall, Winter, Spring, Summer'),

  body('year')
    .isInt({ min: 2000, max: 2100 })
    .withMessage('Year must be between 2000 and 2100'),

  body('status')
    .isString()
    .isIn(['Enrolled', 'Completed', 'Dropped'])
    .withMessage('Status must be Enrolled, Completed, or Dropped'),
];

const updateEnrollmentValidation = [
  body('courseTitle')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 }),

  body('semester')
    .optional()
    .isString()
    .isIn(['Fall', 'Winter', 'Spring', 'Summer']),

  body('year')
    .optional()
    .isInt({ min: 2000, max: 2100 }),

  body('status')
    .optional()
    .isString()
    .isIn(['Enrolled', 'Completed', 'Dropped']),
];

module.exports = {
  createEnrollmentValidation,
  updateEnrollmentValidation,
};
