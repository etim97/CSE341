const router = require ('express').Router();
const coursesController = require ('../controllers/coursesController')

// GET all authors
router.get('/', coursesController.getAllCourses);

// GET ONE
router.get('/:id', coursesController.getCourse);

// CREATE a new author
router.post('/',  coursesController.createCourse);

// UPDATE an author by ID
router.put('/:id',  coursesController.updateCourse);

// DELETE an author by ID
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;


