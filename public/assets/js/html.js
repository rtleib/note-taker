const express = require('express');
const path = require("path")
const server = require('/server.js')

// create port varible and initizing the app
const app = express(server);
const PORT = 3001;

// GET app for /notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// // GET app for *
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start the server
app.listen(PORT, () => {
  console.log('app is running on PORT ' + PORT);
});
