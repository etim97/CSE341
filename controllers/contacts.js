const { ObjectId } = require('mongodb');
const { db } = require('../server');

// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one contact
const getContactById = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = await db.collection('contacts').findOne({ _id: contactId });

    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Create a new contact
const createContact = async (req, res) => {
  const contact = req.body;
  const db = getDB();

  if (!contact.firstName || !contact.lastName || !contact.email || !contact.favoriteColor || !contact.birthday) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.collection('contacts').insertOne(contact);
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT: Update a contact
const updateContact = async (req, res) => {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE: Remove a contact
const deleteContact = async (req, res) => {
  const contactId = req.params.id;
  const db = getDB();

  try {
    const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(contactId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};

