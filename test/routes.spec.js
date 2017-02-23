process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server/server.js');

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
