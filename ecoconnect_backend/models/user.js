// models/user.js

const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true }
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;