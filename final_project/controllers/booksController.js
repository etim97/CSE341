const { getDB } = require('../model/connection')
const { ObjectId } = require('mongodb');

// CREATE
exports.createBook = async (req, res) => {
  try { 
    const db = getDB();
    const result = await db.collection("books").insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    };

// GET ALL
exports.getBooks = async (req, res) => {
  try {
    const db = getDB();
    const books = await db.collection("books").find().toArray();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateBook = async (req, res) => {
  try {  
    const db = getDB();
    const result = await db.collection("books").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    )
    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book updated successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
    }
};

// DELETE
exports.deleteBook = async (req, res) => {
  try {  
    const db = getDB();
    const result = await db.collection("books").deleteOne(
      { _id: new ObjectId(req.params.id) }
    )
    if (result.deletedCount === 0)
      return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
    }
};
    