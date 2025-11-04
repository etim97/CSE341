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

module.exports = { getAllContacts, getContactById };
