const mongoose = require('mongoose');

// Define Meme Schema
const modelSchema = new mongoose.Schema({
  useername: {
    type: String, // Store image data as buffer
    required: true
  },
  title: {
    type: String, // Array of tags
    required: true
  },
  question: {
    type: String, // MIME type of the image
    required: true
  },
  category: {
    type: String, // MIME type of the image
    required: true
  }
}, {timestamps: true});

// Create Meme model
const Model = mongoose.model('Model', modelSchema);

module.exports = Model;