const { getDB } = require('../model/connection');
const { ObjectId } = require('mongodb');

// CREATE (Add Publisher)
exports.createPublisher = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("publishers").insertOne(req.body);

    res.status(201).json({
      message: "Publisher created successfully",
      insertedId: result.insertedId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getAllPublishers = async (req, res) => {
  try {
    const db = getDB();
    const publishers = await db.collection("publishers").find().toArray();
    res.status(200).json(publishers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
exports.getPublisher = async (req, res) => {
  try {
    const db = getDB();
    const publisher = await db.collection("publishers").findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!publisher) {
      return res.status(404).json({ error: "Publisher not found" });
    }

    res.status(200).json(publisher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updatePublisher = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("publishers").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Publisher not found" });
    }

    res.status(200).json({ message: "Publisher updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deletePublisher = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("publishers").deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Publisher not found" });
    }

    res.status(200).json({ message: "Publisher deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
