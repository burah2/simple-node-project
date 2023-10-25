const mongoose = require('mongoose');

// Define a schema for the User entity
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is required
  },
  email: {
    type: String,
    required: true, // This field is required
  },
  password: {
    type: String,
    required: true, // This field is required
  },
  // Add other fields relevant to the User entity here
});

// Create a Mongoose model for the User entity
const User = mongoose.model('User', userSchema);

module.exports = User;
