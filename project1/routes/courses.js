const router = require('express').Router();
const coursecontroller = require('../controllers/courseController');
const studentcontroller = require('../controllers/studentController');
const { validationResult } = require('express-validator');
const { createCourseValidation, updateCourseValidation } = require('../validation/courseValidation'); // separate file

// GET all courses
router.get('/', coursecontroller.getCourses);

// POST new course with validation
router.post('/', createCourseValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  coursecontroller.createCourse(req, res);
});

// PUT update course with validation
router.put('/:id', updateCourseValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  coursecontroller.updateCourse(req, res);
});

// DELETE a course
router.delete('/:id', coursecontroller.deleteCourse);

module.exports = router;
