const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = './6-payment_token.js';

describe(('getPaymentTokenFromAPI', () => {
  it('Async tests with done', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API' });
        done();
      });
  });
}));
