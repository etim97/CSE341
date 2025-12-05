const { getDB } = require('../model/connection');
const { ObjectId } = require('mongodb');

// CREATE
exports.createAuthor = async (req, res) => {
  try { 
    const db = getDB();
    const result = await db.collection("authors").insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };    
  
// GET ALL
exports.getAuthors = async (req, res) => {
  try {
    const db = getDB();
    const authors = await db.collection("authors").find().toArray();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateAuthor = async (req, res) => {
  try {  
    const db = getDB();
    const result = await db.collection("authors").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    )
    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Author not found" });
    res.status(200).json({ message: "Author updated successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
  }
  };
  
  // delete
exports.deleteAuthor = async (req, res) => {
    try { 
        const db = getDB();
        const result = await db.collection("authors").deleteOne(
          { _id: new ObjectId(req.params.id) }
        )
        if (result.deletedCount === 0)
            return res.status(404).json({ error: "Author not found" });
        res.status(200).json({ message: "Author deleted successfully" });
        } catch (error) { res.status(500).json({ error: error.message });
        }
    };
    
    