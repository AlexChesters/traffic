/* eslint-env jest */

const traffic = require('../../..')
const regions = traffic.regions

describe('regions', () => {
  describe('isValid', () => {
    test('should recognise a valid region', () => {
      expect(regions.isValid('North West')).toEqual('NORTH_WEST')
    })
    test('should recognise a valid region regardless of casing', () => {
      expect(regions.isValid('north west')).toEqual('NORTH_WEST')
    })
    test('should reject an invalid region', () => {
      expect(regions.isValid('my made-up region')).toEqual(undefined)
    })
  })
})
