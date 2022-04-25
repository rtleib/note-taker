const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

// create port varible and initizing the app
const app = express();
const PORT = 3001;

// set up body parsing and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET app for /notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET app for left-hand column to appear in the notes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
  console.log(notes);
  res.json(notes);
  console.log('reach');
});

// GET app for *
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start the server
app.listen(PORT, () => {
  console.log('app is running on PORT ' + PORT);
});