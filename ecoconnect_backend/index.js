// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users'); // Import user routes

// Create Express app
const app = express();
const port = 3000; // Choose your desired port number

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/ecoconnect', {
    // Set any additional options here if needed
    // For example:
    // retryWrites: true,
    // w: 'majority'
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Use user routes
app.use('/users', userRouter);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, EcoConnect!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});