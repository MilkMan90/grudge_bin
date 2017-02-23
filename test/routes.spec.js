process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var Grudge = require('../server/models/grudge.js')

chai.use(chaiHttp);

describe('GET /api/grudges', function() {
  it('should return all initial grudges', function(done) {
    chai.request(server)
    .get('/api/grudges')
    .end(function(err, res) {
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.be.a('array');
    res.body.should.have.lengthOf(2);
    done();
    });
  });
});

describe('POST /api/grudges', function() {
    it('should create a new grudge', function(done) {
    let newGrudge = new Grudge('Name', 'Offense', false, Date.now())
    chai.request(server)
    .post('/api/grudges')
    .send(newGrudge)
    .end(function(err, res) {
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.be.a('array');
    res.body.should.have.lengthOf(3);
    done();
    });
  });
});

describe('PUT /api/grudges', function() {
    it('should update an existing grudge', function(done) {
      const grudge = new Grudge('Donald Fucking Trump', 'Being a HUGE piece of shit', false, Date.now())
      const request = {grudge, id: 0}
      chai.request(server)
      .put('/api/grudges')
      .send(request)
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body.should.have.lengthOf(3);
      res.body[0].name.should.be.equal('Donald Fucking Trump');
      res.body[0].offense.should.be.equal('Being a HUGE piece of shit');
      done();
    });
  });
    it('should fail to update a non-existing grudge', function(done) {
      const grudge = new Grudge('Donald Fucking Trump', 'Being a HUGE piece of shit', false, Date.now())
      const request = {grudge, id: 5}
      chai.request(server)
      .put('/api/grudges')
      .send(request)
      .end(function(err, res) {
      res.should.have.status(404);
      res.should.be.json;
      done();
    });
  });
});
