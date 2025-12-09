const router = require('express').Router();
const controllers = require('../controllers/booksController');
const ensureAuth = require('../auth/ensureAuth');

// GET all books
router.get('/', controllers.getBooks);
// CREATE a new book
router.post('/', controllers.createBook);
// UPDATE an book by ID
router.put('/:id', controllers.updateBook);
// DELETE an book by ID
router.delete('/:id', controllers.deleteBook);

module.exports = router;