const { getDB } = require('../models/connection');
const { ObjectId } = require('mongodb');

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const db = getDB(); // ✅ use getDB
    const result = await db.collection('students').insertOne(req.body);
    res.status(201).json({
      message: 'Student created successfully', // ✅ added success message
      data: result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
exports.getStudents = async (req, res) => {
  try {
    const db = getDB();
    const students = await db.collection('students').find().toArray();
    res.status(200).json({
      message: 'Students retrieved successfully', // ✅ added success message
      data: students
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection('students').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0)
      return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student updated successfully' }); // ✅ already has message
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection('students').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0)
      return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student deleted successfully' }); // ✅ already has message
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
