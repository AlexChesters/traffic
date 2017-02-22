const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const schema = require('../../schemas/event')

chai.use(require('chai-json-schema'))

describe('incidents', function () {
  describe('without specifying a region', function () {
    before(async function () {
      const traffic = require('../../../')
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
      const traffic = require('../../../')
      this.data = await traffic.incidents('North West')
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
