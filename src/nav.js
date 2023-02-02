const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.write('<h1>html line </h1>');
  res.send();
});

app.get('/about', (req, res) => {
  res.send('welcome to my About page');
});

app.get('/contact', (req, res) => {
  res.status(200).send('welcome to my Contact page');
});

app.get('/temp', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Taddy',
    },
    {
      id: 1,
      name: 'Taddy',
    },
  ]);
});

app.get('/json', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Bhanu',
    },
    {
      id: 1,
      name: 'Bhanu',
    },
  ]);
});

app.listen(port, () => {
  console.log(`sever listening at port ${port}`);
});
