const router = require ('express').Router();
const studentsController = require ('../controllers/studentsController')

// GET all authors
router.get('/', studentsController.getAllStudents);

// GET ONE
router.get('/:id', studentsController.getStudent);

// CREATE a new author
router.post('/',  studentsController.createStudent);

// UPDATE an author by ID
router.put('/:id',  studentsController.updateStudent);

// DELETE an author by ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
