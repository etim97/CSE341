const router = require ('express').Router();
const enrollmentsController = require ('../controllers/enrollmentsController')

// GET all authors
router.get('/', enrollmentsController.getAllEnrollments);

// GET ONE
router.get('/:id', enrollmentsController.getEnrollment);

// CREATE a new author
router.post('/',  enrollmentsController.createEnrollment);

// UPDATE an author by ID
router.put('/:id',  enrollmentsController.updateEnrollment);

// DELETE an author by ID
router.delete('/:id', enrollmentsController.deleteEnrollment);

module.exports = router;

