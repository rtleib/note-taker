const express = require('express');
const notes = require('./db/db.json');
const path = require('path');

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
    console.log(notes);
    res.json(notes);
    console.log('reach');
  });