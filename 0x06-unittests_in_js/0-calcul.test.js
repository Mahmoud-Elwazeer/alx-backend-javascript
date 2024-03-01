const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(calculateNumber(1, 2), 3);
  })
})
