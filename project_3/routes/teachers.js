const router = require ('express').Router();
const teachersController = require ('../controllers/teachersController')

// GET all authors
router.get('/', teachersController.getAllTeachers);

// GET ONE
router.get('/:id', teachersController.getTeacher);

// CREATE a new author
router.post('/',  teachersController.createTeacher);

// UPDATE an author by ID
router.put('/:id',  teachersController.updateTeacher);

// DELETE an author by ID
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;
