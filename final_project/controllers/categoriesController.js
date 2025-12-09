const { getDB } = require('../model/connection');
const { ObjectId } = require('mongodb');
// CREATE
exports.createCategory = async (req, res) => {
  try { 
    const db = getDB();
    const result = await db.collection("categories").insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
    };

// GET ALL
exports.getAllCategories = async (req, res) => {
  try { 
    const db = getDB();
    const categories = await db.collection("categories").find().toArray();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
exports.getCategory = async (req, res) => {
  try { 
    const db = getDB();
    const category =  await db.collection("categories").findOne(
      { _id: new ObjectId(req.params.id) }
    );
    if (!category)
      return  res.status(404).json({ error: "Category not found" });
    res.status(200).json(category);
    }
    catch (error) { res.status(500).json({ error: error.message });
    }
};
// UPDATE
exports.updateCategory = async (req, res) => {
  try { 
    const db = getDB();
    const result = await db.collection("categories").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    )
    if (result.matchedCount === 0)
      return res.status(404).json({ error: "Category not found" });
    res.status(200).json({ message: "Category updated successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
    }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try { 
    const db = getDB();
    const result = await db.collection("categories").deleteOne(
        { _id: new ObjectId(req.params.id) }
    )
    if (result.deletedCount === 0)
      return res.status(404).json({ error: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) { res.status(500).json({ error: error.message });
    }
};



