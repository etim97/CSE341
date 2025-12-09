const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');
const ensureAuth = require('./auth/ensureAuth');
const { connectDB } = require('./model/connection');

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev_secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Root endpoint
app.get('/', (req, res) => {
  res.send('Books and Authors API');
});

// Import routes
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');
const publishersRoutes = require('./routes/publishers');
const categoriesRoutes = require('./routes/categories');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

// Mount routes
app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);
app.use('/publishers', publishersRoutes);
app.use('/categories', categoriesRoutes);
app.use('/auth', authRoutes);


// Protected routes (require login)
app.use('/protected', ensureAuth, protectedRoutes);

// OAuth routes (GitHub login)
app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/', session: true }),
  (req, res) => {
    res.redirect('/'); // Redirect after successful login
  }
);

// export the app for testing
module.exports = app;


// Start server only when NOT testing
if (process.env.NODE_ENV !== "test") {
  connectDB().then(() => {
   app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  });
}
