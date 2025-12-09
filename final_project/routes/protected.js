
const express = require('express');
const router = express.Router();
const  ensureAuth  = require('../auth/ensureAuth');

// Example protected routes
router.get('/dashboard', ensureAuth, (req, res) => {
  res.json({
    message: 'Welcome to your dashboard',
    user: req.user
  });
});

router.get('/profile', ensureAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;