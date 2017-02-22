const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const schema = require('../../schemas/event')

chai.use(require('chai-json-schema'))

const traffic = require('../../../')
const regions = require('../../../src/common/regions')

describe('incidents', function () {
  describe('without specifying a region', function () {
    before(async function () {
      this.data = await traffic.incidents()
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
      this.data = await traffic.incidents(regions.NORTH_WEST)
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
