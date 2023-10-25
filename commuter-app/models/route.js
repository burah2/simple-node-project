const mongoose = require('mongoose');

// Define a schema for the route entity
const routeSchema = new mongoose.Schema({
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

});

// Create a Mongoose model for the route entity
const route = mongoose.model('route', routeSchema);

module.exports = route;
