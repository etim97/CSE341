const express = require('express');
const router = express.Router();
const  ensureAuth  = require('../auth/ensureAuth');

// Example protected routes
router.get('/management', ensureAuth, (req, res) => {
  res.json({
    message: 'Welcome to School management System',
    user: req.user
  });
});

router.get('/Staffs', ensureAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;