const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'Lalitta@#&2003',
    database:'ecoconnect',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route for handling form submissions
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log({ username, email, password });

  // Insert form data into MySQL database
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(query, [username, email, password], (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Error signing up');
      return;
    }
    console.log('User signed up successfully');
    res.send('Sign up successful!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});