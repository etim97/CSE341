const router = require('express').Router();
const publishersController = require('../controllers/publishersController');  




// CREATE
router.post('/', publishersController.createPublisher);
// GET ALL
router.get('/', publishersController.getAllPublishers);
// GET ONE
router.get('/:id', publishersController.getPublisher);
// UPDATE
router.put('/:id', publishersController.updatePublisher);
// DELETE
router.delete('/:id', publishersController.deletePublisher);

module.exports = router;