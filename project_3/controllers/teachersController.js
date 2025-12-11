const { getDB } = require('../model/connection');
const {ObjectId} = require('mongodb')

//create
exports.createTeacher = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("teachers").insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get all
exports.getAllTeachers = async (req, res) => {
    try {
        const db = getDB();
        const teachers = await db.collection("teachers").find().toArray();
        res.status(200).json(teachers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//get by id
exports.getTeacher = async (req, res) => {
    try {
        const db = getDB();
        const teacher = await db.collection("teachers").findOne(
            { _id: new ObjectId(req.params.id) }
        );
        if (!teacher)
            return res.status(404).json({ error: "Teacher not found" });
        res.status(200).json(teacher);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE
exports.updateTeacher = async (req, res) => {
  try {  
    const db = getDB();
    const result = await db.collection("teachers").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    )
    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Teacher not found" });
    res.status(200).json({ message: "Teacher updated successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
  }
  };

// DELETE
exports.deleteTeacher = async (req, res) => {
    try { 
        const db = getDB();
        const result = await db.collection("teachers").deleteOne(
          { _id: new ObjectId(req.params.id) }
        )
        if (result.deletedCount === 0)
            return res.status(404).json({ error: "Teacher not found" });
        res.status(200).json({ message: "Teacher deleted successfully" });
        } catch (error) { res.status(500).json({ error: error.message });
        }
    };

