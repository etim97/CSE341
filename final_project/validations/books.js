const { body, params } = require('express-validator');

// Validation rules for creating or updating a book
const bookValidationRules = [
  body('title') 
    .notEmpty().withMessage('Title is required')
    .isString().withMessage('Title must be a string')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),

    body('author_id')
    .notEmpty().withMessage('Author ID is required')
    .isMongoId().withMessage('Invalid Author ID format'),
    body('published_year')
    .notEmpty().withMessage('Published year is required')            
    .isInt({ min: 0 }).withMessage('Published year must be a valid year'),
  body('genre')
    .optional()
    .isString().withMessage('Genre must be a string')
    .isLength({ max: 50 }).withMessage('Genre cannot exceed 50 characters'),
];

// Validation rule for book ID parameter
const bookIdValidationRule = [
  params('id')
    .notEmpty().withMessage('Book ID is required')
    .isMongoId().withMessage('Invalid Book ID format'),
];

module.exports = {
  bookValidationRules,
  bookIdValidationRule
};