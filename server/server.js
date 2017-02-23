var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function Grudge(name, offense, forgiven, date){
  this.id = Date.now();
  this.name = name;
  this.offense = offense;
  this.forgiven = forgiven || false;
  this.date = date;
}

app.locals.grudges = []

//add initial grudges for testing
const grudge1 = new Grudge('Donald Trump', 'Being a piece of shit', false, Date.now())
const grudge2 = new Grudge('Matt', 'Being Me', true, Date.now())
app.locals.grudges.push(grudge1)
app.locals.grudges.push(grudge2)

app.get('/api/grudges', (request, response) => {
  response.status(200).json(app.locals.grudges)
});

app.post('/api/grudges', (request, response) => {
  const { folderName } = request.body;
  const folder = {name: folderName, created_at: new Date};
  database('folders').insert(folder)
    .then(function(){
      database('folders').select()
        .then(function(folders){
          response.status(200).json(folders);
        })
        .catch(function(error) {
          console.error('somethings wrong with db'+ error);
          response.status(404);
        });
    });
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
