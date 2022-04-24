const express = require('express');


// create port varible and initizing the app
const app = express();
const PORT = 3001;

// start the server
app.listen(PORT, () => {
    console.log('app is running on PORT ' + PORT);
  });