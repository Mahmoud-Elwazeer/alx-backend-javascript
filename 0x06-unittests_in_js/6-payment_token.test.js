const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));
const getPaymentTokenFromAPI = './6-payment_token.js';

describe(('getPaymentTokenFromAPI', () => {
  it('Async tests with done', () => {
    return getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(true).to.deep.equal({data: 'Successful response from the API' });
      });
  });
}));
