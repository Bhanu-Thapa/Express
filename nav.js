const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my Home page');
});

app.get('/about', (req, res) => {
  res.send('welcome to my About page');
});

app.get('/contact', (req, res) => {
  res.send('welcome to my Contact page');
});

app.get('/temp', (req, res) => {
  res.status(200).send('welcome to my Temp page');
});

app.listen(port, () => {
  console.log(`sever listening at port ${port}`);
});
