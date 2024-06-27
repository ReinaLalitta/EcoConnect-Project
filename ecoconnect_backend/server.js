const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const usersRouter = require('./routes/users'); // Replace with your actual route file

const app = express();
const port = process.env.PORT || 3000; // Use port 3000 or environment port

// Middleware
app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../ecoconnect-frontend')));

// API routes
app.use('/api/users', usersRouter); // Example API routes

// Fallback to serve index.html for any other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../ecoconnect-frontend', 'index.html'));
});

// MongoDB connection (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/ecoconnect', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});