const { getDB } = require('../model/connection');
const {ObjectId} = require('mongodb')

// CREATE
exports.createEnrollment = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("enrollments").insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ALL
exports.getAllEnrollments = async (req, res) => {
    try {
        const db = getDB();
        const enrollments = await db.collection("enrollments").find().toArray();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET BY ID
exports.getEnrollment= async (req, res) => {
    try {
        const db = getDB();
        const enrollment = await db.collection("enrollments").findOne(
            { _id: new ObjectId(req.params.id) }
        );
        if (!enrollment)
            return res.status(404).json({ error: "Enrollment not found" });
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};  

// UPDATE
exports.updateEnrollment = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("enrollments").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        )
        if (result.matchedCount === 0)
            return res.status(404).json({ error: "Enrollment not found" });
        res.status(200).json({ message: "Enrollment updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE
exports.deleteEnrollment = async (req, res) => {
    try {
        const db = getDB();
        const result = await db.collection("enrollments").deleteOne(
            { _id: new ObjectId(req.params.id) }
        )
        if (result.deletedCount === 0)
            return res.status(404).json({ error: "Enrollment not found" });
        res.status(200).json({ message: "Enrollment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
