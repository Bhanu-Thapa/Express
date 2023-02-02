const express = require('express');
const app = express();
const path = require('path');

// relative absolute - path
// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');

// builtin middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('Hello World From The Express');
});

app.get('/about', (req, res) => {
  res.send('Hello World From The About Page');
});

app.listen(8000, () => {
  console.log('listing the port at 8000');
});
