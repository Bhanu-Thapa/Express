const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World From The Express');
});

app.get('/about', (req, res) => {
  res.send('Hello World From The About Page');
});

app.listen(8000, () => {
  console.log('listing the port at 8000');
});
