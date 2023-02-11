const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');
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
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=f778e965fda44430ddab0696ac1d9587`
  )
    .on('data', (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      console.log(
        `city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`
      );

      res.write(arrData[0].name);
      // console.log(realTimeData);
    })
    .on('end', (err) => {
      if (err) return console.log('connection closed due to errors', err);
      res.end();
    });

  // console.log(req.query);
  // res.render('about', {
  //   name: req.query.name,
  //   age: req.query.age,
  // });
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
