const router = require('express').Router();
const passport = require('../config/passport');
const ensureAuth = require('../auth/ensureAuth'); // your middleware


// Start GitHub OAuth login
router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Callback route after GitHub login
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/', session: true }), 
    (req, res) => {
    // Redirect anywhere after successful login
    res.redirect('/protected/dashboard');
  }
);

// Logout route
router.get('/logout', ensureAuth, (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.json({ message: 'Logged out successfully' });
  });
});

module.exports = router;


