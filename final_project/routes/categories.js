const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const ensureAuth = require('../auth/ensureAuth');

// GET ALL
router.get('/', categoriesController.getAllCategories);
// GET ONE
router.get('/:id', categoriesController.getCategory);

// CREATE
router.post('/',  categoriesController.createCategory);

// UPDATE
router.put('/:id', categoriesController.updateCategory);
// DELETE
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;