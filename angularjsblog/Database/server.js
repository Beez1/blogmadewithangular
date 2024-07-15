const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4201;
const mongoURI = process.env.DATABASE_URL;

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

const Model = require('./model/model');

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
