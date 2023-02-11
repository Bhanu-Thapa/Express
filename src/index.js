const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// relative absolute - path
// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));

// const staticPath = path.join(__dirname, '../public');

// to set the view engine
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '../templates/views'));

const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

// template engine route
app.get('/', (req, res) => {
  res.render('index', {
    heading: 'dynamic content',
  });
});

app.get('/about', (req, res) => {
  // console.log(req.query);
  res.render('about', {
    name: req.query.name,
    age: req.query.age,
  });
});

app.get('/about/*', (req, res) => {
  res.render('404', {
    errorcomment: "opps in about, page can't be found",
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    errorcomment: "opps page can't be found",
  });
});

// builtin middleware
// app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('Hello World From The Express');
});

app.get('/about', (req, res) => {
  res.send('Hello World From The About Page');
});

app.listen(8000, () => {
  console.log('listing the port at 8000');
});
