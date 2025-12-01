const express = require('express');
const ensureAuth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/protected', ensureAuth, (req, res) => {
  res.json({ message: 'You are logged in!', user: req.user });
});

// Second protected route
router.get('/dashboard', ensureAuth, (req, res) => {
  res.json({ message: 'Welcome to your dashboard', user: req.user });
});


module.exports = router;