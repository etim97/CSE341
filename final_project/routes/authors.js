const router = require('express').Router();
const controllers = require('../controllers/authorsController');


// GET all authors
router.get('/', controllers.getAuthors);
// CREATE a new author
router.post('/',  controllers.createAuthor);
// UPDATE an author by ID
router.put('/:id',  controllers.updateAuthor);
// DELETE an author by ID
router.delete('/:id', controllers.deleteAuthor);

module.exports = router;

