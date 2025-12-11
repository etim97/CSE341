const { body } = require('express-validator');

const createTeacherValidation = [
  body('name')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters'),

  body('email')
    .isEmail()
    .withMessage('Must be a valid email'),

  body('department')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Department must be at least 3 characters'),

  body('gender')
    .isString()
    .isIn(['Male', 'Female'])
    .withMessage('Gender must be either Male or Female'),
];

const updateTeacherValidation = [
  body('name')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 }),

  body('email')
    .optional()
    .isEmail(),

  body('department')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 }),

  body('gender')
    .optional()
    .isString()
    .isIn(['Male', 'Female']),
];

module.exports = {
  createTeacherValidation,
  updateTeacherValidation,
};
