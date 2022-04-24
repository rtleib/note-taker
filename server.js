const express = require('express');
const htmlRoutes = require('./public/assets/js/html');
// const apiRoutes = require('./public/assets/js/api');

// create port varible and initizing the app
const app = express();
const PORT = 3001;
app.use('/', htmlRoutes);
// app.use('*', apiRoutes);

// set up body parsing and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// start the server
app.listen(PORT, () => {
    console.log('app is running on PORT ' + PORT);
  });