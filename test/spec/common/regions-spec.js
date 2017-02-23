const chai = require('chai')
const expect = chai.expect

const traffic = require('../../../')
const regions = traffic.regions

describe('regions', function () {
  describe('isValid', function () {
    it('should recognise a valid region', function () {
      expect(regions.isValid('North West')).to.equal(true)
    })
    it('should recognise a valid, URI-encoded region', function () {
      expect(regions.isValid('North%20West')).to.equal(true)
    })
    it('should recognise a valid region regardless of casing', function () {
      expect(regions.isValid('north west')).to.equal(true)
    })
    it('should recognise a valid, URI-encoded region regardless of casing', function () {
      expect(regions.isValid('north%20west')).to.equal(true)
    })
  })
})
