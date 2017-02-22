const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const schema = require('../../schemas/event')

chai.use(require('chai-json-schema'))

describe('traffic.roadworks()', function () {
  // traffic.roadworks() requests roadwork information for the whole of the UK
  // as you can imagine, this is pretty slow - hence the 7.5s timeout
  this.timeout(7500)
  before(async function () {
    const traffic = require('../../../')
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
