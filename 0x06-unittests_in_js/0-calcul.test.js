const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should be around the rounded part', () => {
    assert.equal(calculateNumber(1, 2), 3);
  })

  it('should be around the rounded part', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  })

  it('should be around the rounded part', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  })

  it('should be around the rounded part', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  })
})
