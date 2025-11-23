const router = require('express').Router();
const studentcontroller = require('../controllers/courseController');
const { validationResult } = require('express-validator');
const { createCourseValidation, updateCourseValidation } = require('../validations/courseValidation'); // separate file

// GET all courses
router.get('/', studentcontroller.getCourses);

// POST new course with validation
router.post('/', createCourseValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  studentcontroller.createCourse(req, res);
});

// PUT update course with validation
router.put('/:id', updateCourseValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  studentcontroller.updateCourse(req, res);
});

// DELETE a course
router.delete('/:id', studentcontroller.deleteCourse);

module.exports = router;
