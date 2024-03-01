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

  it('should return payment methods for cart when :id is a number', (done) => {
    request.get(`http://localhost:${port}/cart/12`, (err, res, body) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 Not Found when :id is NOT a number', (done) => {
    request.get(`http://localhost:${port}/cart/abc`, (err, res, body) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('avilable payment', (done) => {
    request.get(`http://localhost:${port}/available_payments`, (err, res, body) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  it('spost data', (done) => {
    request.get(`http://localhost:${port}/login`,  {json: {userName: 'Elwazeer'}}, (err, res, body) => {
      if (err) {
        return done(err);
      }
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Elwazeer');
      done();
    });
  });
});

