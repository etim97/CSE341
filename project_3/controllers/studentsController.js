const { getDB } = require('../model/connection');
const {ObjectId} = require('mongodb')

// CREATE
exports.createStudent = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("students").insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ALL
exports.getAllStudents = async (req, res) => {
    try {
        const db = getDB();
        const enrollments = await db.collection("students").find().toArray();
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET BY ID
exports.getStudent = async (req, res) => {
    try {
        const db = getDB();
        const enrollment = await db.collection("students").findOne(
            { _id: new ObjectId(req.params.id) }
        );
        if (!enrollment)
            return res.status(404).json({ error: "Student not found" });
        res.status(200).json(enrollment);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudent = async (req, res) => {
  try {  
    const db = getDB();
    const result = await db.collection("students").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    )
    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Student updated successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
  }
  };

// DELETE
exports.deleteStudent = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("students").deleteOne(
            { _id: new ObjectId(req.params.id) }
        )
        if (result.deletedCount === 0)
            return res.status(404).json({ error: "Student not found" });
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};