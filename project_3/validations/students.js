const { body } = require('express-validator');

const createStudentValidation = [
  body('name')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters'),

  body('age')
    .isInt({ min: 5, max: 100 })
    .withMessage('Age must be between 5 and 100'),

  body('email')
    .isEmail()
    .withMessage('Must be a valid email'),

  body('gender')
    .isString()
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either Male or Female'),
];

const updateStudentValidation = [
  body('name')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters'),

  body('age')
    .optional()
    .isInt({ min: 5, max: 100 })
    .withMessage('Age must be between 5 and 100'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Must be a valid email'),

  body('gender')
    .optional()
    .isString()
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either Male or Female'),
];

module.exports = {
  createStudentValidation,
  updateStudentValidation,
};
