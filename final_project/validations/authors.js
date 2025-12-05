const { body, params } = require('express-validator');

// Validation rules for creating or updating an author
const authorValidationRules = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('nationality')
    .notEmpty().withMessage('Nationality is required')
    .isString().withMessage('Nationality must be a string')
    .isLength({ max: 50 }).withMessage('Nationality cannot exceed 50 characters'),
  body('year_of_birth')
    .notEmpty().withMessage('Year of birth is required')            
    .isInt({ min: 0 }).withMessage('Year of birth must be a valid year'),
  body('school')
    .optional()
    .isString().withMessage('School must be a string')
    .isLength({ max: 100 }).withMessage('School cannot exceed 100 characters'),
];  
// Validation rule for author ID parameter
const authorIdValidationRule = [
  params('id')
    .notEmpty().withMessage('Author ID is required')
    .isMongoId().withMessage('Invalid Author ID format'),
];  

module.exports = {
  authorValidationRules,
  authorIdValidationRule,
};
