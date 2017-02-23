var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');
const Grudge = require('./models/grudge.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.grudges = []

const initializeGrudges = () => {
  const grudge1 = new Grudge(app.locals.grudges.length,'Donald Trump', 'Being a piece of shit', false, Date.now())
  app.locals.grudges.push(grudge1)
  const grudge2 = new Grudge(app.locals.grudges.length,'Matt', 'Being Me', false, Date.now()+1)
  app.locals.grudges.push(grudge2)
}

initializeGrudges()

app.get('/api/grudges', (request, response) => {
  response.status(200).json(app.locals.grudges)
});

app.post('/api/grudges', (request, response) => {
  const {grudge} = request.body;
  newGrudge = new Grudge(app.locals.grudges.length, grudge.name, grudge.offense, false, grudge.date)
  app.locals.grudges.push(newGrudge)
  response.status(200).json(app.locals.grudges)
});

app.put('/api/grudges', (request, response) => {
  const {grudge, id} = request.body;

  if(app.locals.grudges[id]){
    app.locals.grudges[id].name = grudge.name
    app.locals.grudges[id].offense = grudge.offense
    app.locals.grudges[id].forgiven = grudge.forgiven
    app.locals.grudges[id].date = grudge.date
    response.status(200).json(app.locals.grudges)
  } else {
    response.status(404).json({message:'Grudge does not exist'})
  }
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
