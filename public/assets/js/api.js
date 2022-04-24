// const express = require('express');
// const router = require("express").Router()
// const notes = require('./db/db.json');
// const path = require('path');
// const fs = require('fs');

// app.get('/api/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, './db/db.json'));
//   console.log(notes);
//   res.json(notes);
//   console.log('reach');
// });
// app.get('/notes', (req, res) => {
//   // use the fs module to read notes from the database
//   fs.readFile('../db/db.json', 'utf-8', (err, data) => {
//     if (err) throw err;
//     let newTask = json.parse(data);
//     newTask.push(NewNote);
//     res.sendFile(path.join(__dirname, './public/notes.html'));
//     // return notes using res.json
//     res.json(notes);
//   });
// });

// module.exports = router