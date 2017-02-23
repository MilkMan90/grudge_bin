var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
const Grudge = require('./models/grudge.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.grudges = []

const initializeGrudges = () => {
  const grudge1 = new Grudge('Donald Trump', 'Being a piece of shit', false, Date.now())
  const grudge2 = new Grudge('Matt', 'Being Me', true, Date.now())
  app.locals.grudges.push(grudge1)
  app.locals.grudges.push(grudge2)
}

initializeGrudges()

app.get('/api/grudges', (request, response) => {
  response.status(200).json(app.locals.grudges)
});

app.post('/api/grudges', (request, response) => {
  const grudge = request.body;
  app.locals.grudges.push(grudge)
  response.status(200).json(app.locals.grudges)
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var port_number = process.env.PORT || 3001

app.listen(port_number, function () {
  console.log('RrrarrrrRrrrr server alive on port 3001')
});

module.exports = app;
