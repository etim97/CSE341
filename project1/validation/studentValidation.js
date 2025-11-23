const { body } = require('express-validator');

const createStudentValidation = [
  body('name').isString().trim().isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
  body('age').isInt({ min: 5, max: 100 }).withMessage('Age must be between 5 and 100'),
  body('email').isEmail().withMessage('Must be a valid email'),
  body('department').isString().trim().notEmpty().withMessage('Department is required'),
  body('enrollmentYear').isInt({ min: 2000, max: 2100 }).withMessage('Enrollment year must be between 2000 and 2100'),
  body('gpa').isFloat({ min: 0, max: 4 }).withMessage('GPA must be between 0 and 4'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
];

const updateStudentValidation = [
  body('name').optional().isString().trim().isLength({ min: 3 }),
  body('age').optional().isInt({ min: 5, max: 100 }),
  body('email').optional().isEmail(),
  body('department').optional().isString().trim(),
  body('enrollmentYear').optional().isInt({ min: 2000, max: 2100 }),
  body('gpa').optional().isFloat({ min: 0, max: 4 }),
  body('isActive').optional().isBoolean(),
];

module.exports = {
  createStudentValidation,
  updateStudentValidation
};


