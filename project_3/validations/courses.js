const { body } = require('express-validator');

const createCourseValidation = [
  body('title')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters'),

  body('code')
    .isString()
    .trim()
    .matches(/^[A-Za-z]{2,5}[0-9]{2,4}$/)
    .withMessage('Course code must be like CS101, MATH205, ENG110'),

  body('credits')
    .isInt({ min: 1, max: 10 })
    .withMessage('Credits must be between 1 and 10'),

  body('description')
    .isString()
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters'),

  body('teacher')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Teacher name is required'),
];

const updateCourseValidation = [
  body('title')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 }),

  body('code')
    .optional()
    .isString()
    .trim()
    .matches(/^[A-Za-z]{2,5}[0-9]{2,4}$/),

  body('credits')
    .optional()
    .isInt({ min: 1, max: 10 }),

  body('description')
    .optional()
    .isString()
    .isLength({ min: 10 }),

  body('teacher')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 3 }),
];

module.exports = {
  createCourseValidation,
  updateCourseValidation,
};
