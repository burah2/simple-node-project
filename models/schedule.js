const mongoose = require('mongoose');

// Define a schema for the schedule entity
const scheduleSchema = new mongoose.Schema({
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
  // Add other fields relevant to the schedule entity here
});

// Create a Mongoose model for the schedule entity
const schedule = mongoose.model('schedule', scheduleSchema);

module.exports = schedule;
