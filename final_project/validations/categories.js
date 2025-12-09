const { body, validationResult } = require('express-validator');
const { ensureAuth } = require('../auth');

// Validation rules for publisher data
exports.validatePublisher = [
    body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
    body('address')
    .optional()
    .isLength({ max: 200 }).withMessage('Address cannot exceed 200 characters'),
    body('phone')
    .optional()
    .isMobilePhone().withMessage('Invalid phone number'),
    body('email')
    .optional()
    .isEmail().withMessage('Invalid email address'),
];

// Middleware to check validation results
exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};