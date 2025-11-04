const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDB } = require('../database/connection');
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDB();
    const contact = await db
      .collection('contacts')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
