const express = require('express');
const passport = require('../config/passport');
const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.redirect('/protected')
);

router.get('/login', (req, res) => {
  // Redirect to GitHub OAuth login
  res.redirect('/auth/github');
});



router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.json({ message: 'Successfully logged out' });
  });
});

module.exports = router;