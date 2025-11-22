const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { validationResult } = require('express-validator');
const { createStudentValidation, updateStudentValidation } = require('../validations/studentValidation');

// GET all students
router.get('/', studentController.getStudents);

// POST new student with validation
router.post('/', createStudentValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  studentController.createStudent(req, res);
});

// PUT update student with validation
router.put('/:id', updateStudentValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  studentController.updateStudent(req, res);
});

// DELETE a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
