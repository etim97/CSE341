const { getDB } = require('../models/connection');
const { ObjectId } = require('mongodb');


// CREATE
exports.createCourse = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("courses").insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getCourses = async (req, res) => {
  try {
    const db = getDB();
    const courses = await db.collection("courses").find().toArray();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateCourse = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("courses").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Course not found" });

    res.status(200).json({ message: "Course updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteCourse = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("courses").deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0)
      return res.status(404).json({ error: "Course not found" });

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
