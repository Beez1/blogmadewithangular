const mongoose = require('mongoose');

// Define Schema
const modelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {timestamps: true});

// Create Model
const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
