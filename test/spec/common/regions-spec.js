const chai = require('chai')
const expect = chai.expect

const traffic = require('../../../')
const regions = traffic.regions

describe('regions', function () {
  describe('isValid', function () {
    it('should recognise a valid region', function () {
      expect(regions.isValid('North West')).to.equal('NORTH_WEST')
    })
    it('should recognise a valid region regardless of casing', function () {
      expect(regions.isValid('north west')).to.equal('NORTH_WEST')
    })
    it('should reject an invalid region', function () {
      expect(regions.isValid('my made-up region')).to.equal(undefined)
    })
  })
})
