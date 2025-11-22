const { body } = require('express-validator');

const createCourseValidation = [
  body('title').isString().notEmpty().withMessage('Title is required'),
  body('description').isString().notEmpty().withMessage('Description is required'),
  body('credits').isInt({ min: 1 }).withMessage('Credits must be a positive number')
];

const updateCourseValidation = [
  body('title').optional().isString(),
  body('description').optional().isString(),
  body('credits').optional().isInt({ min: 1 })
];

module.exports = {
  createCourseValidation,
  updateCourseValidation
};
