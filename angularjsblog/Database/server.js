const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 4201;
const mongoURI = process.env.DATABASE_URL;

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Model import
const Model = require('./model/model');

// Endpoint to handle form submission
app.post('/question', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: 'Please fill form' });
    }

    const newModel = await Model.create({
      username: req.body.username,
      title: req.body.title,
      question: req.body.question,
      category: req.body.category
    });

    res.status(201).json({ message: 'File uploaded successfully', model: newModel });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get all questions
app.get('/model', async (req, res) => {
  try {
    const questions = await Model.find();
    res.status(200).json({ questions });
  } catch (error) {
    console.error('Error getting questions:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
