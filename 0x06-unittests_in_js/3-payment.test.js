const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

describe('sendPaymentRequestToApi', () => {
    it('should be around the rounded part', () => {
      const send_test = sinon.spy(Utils);

      sendPaymentRequestToApi(100, 20);
      expect(send_test.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
      expect(send_test.calculateNumber.callCount).to.be.equal(1);
      send_test.calculateNumber.restore();
    });
});
