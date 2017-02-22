const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const schema = require('../../schemas/event')

chai.use(require('chai-json-schema'))

const traffic = require('../../../')
const regions = require('../../../src/common/regions')

describe('roadworks', function () {
  // traffic.roadworks() requests roadwork information (of which there is a lot)
  // as you can imagine, this is pretty slow - hence the 7.5s timeout
  describe('without specifying a region', function () {
    before(async function () {
      this.timeout(7500)
      this.data = await traffic.roadworks()
    })
    it('should return an array', function () {
      expect(this.data).to.be.an('array')
    })
    it('should match the schema', function () {
      const validate = item => expect(item).to.be.jsonSchema(schema)
      R.forEach(validate, this.data)
    })
  })
  describe('whilst specifying a region', function () {
    before(async function () {
      this.timeout(7500)
      this.data = await traffic.roadworks(regions.EASTERN)
    })
    it('should return an array', function () {
      expect(this.data).to.be.an('array')
    })
    it('should match the schema', function () {
      const validate = item => expect(item).to.be.jsonSchema(schema)
      R.forEach(validate, this.data)
    })
  })
})
