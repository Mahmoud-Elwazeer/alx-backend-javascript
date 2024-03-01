const { expect } = require('chai');
const request = require('request');

port = 7865;

describe('Express Server', () => {
  it('should log a message to the console when started', (done) => {
    request.get(`http://localhost:${port}`, (err, res, body) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

