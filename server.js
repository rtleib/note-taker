const express = require('express');

const path = require('path');

// create port varible and initizing the app
const app = express();
const PORT = 3001;

// set up body parsing and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get route for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  
  // GET route for *
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// start the server
app.listen(PORT, () => {
    console.log('app is running on PORT ' + PORT);
  });