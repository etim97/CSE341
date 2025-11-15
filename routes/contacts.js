const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDB } = require('../database/connection');
// GET: Retrieve all contacts
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// GET: Retrieve a single contact by ID
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

// POST: Create a new contact
router.post('/', async (req, res) => {
  const contact = req.body;
  const db = getDB();

  if (!contact.firstName || !contact.lastName || !contact.email || !contact.favoriteColor || !contact.birthday) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.collection('contacts').insertOne(contact);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update a contact
router.put('/:id', async (req, res) => {
  const contactId = req.params.id;
  const updatedContact = req.body;
  const db = getDB();

  try {
    const result = await db.collection('contacts').updateOne(
      { _id: new ObjectId(contactId) },
      { $set: updatedContact }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Remove a contact
router.delete('/:id', async (req, res) => {
  const contactId = req.params.id;
  const db = getDB();

  try {
    const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(contactId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
