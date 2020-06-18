/* eslint-env jest */

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const traffic = require('../')

const schema = {
  type: 'array',
  items: {
    type: 'object',
    required: [
      'title',
      'category',
      'delay',
      'link',
      'timing',
      'location'
    ],
    properties: {
      title: {
        type: 'string'
      },
      category: {
        type: 'string'
      },
      delay: {
        type: 'string'
      },
      link: {
        type: 'string'
      },
      timing: {
        type: 'object',
        required: [
          'start',
          'end'
        ],
        properties: {
          start: {
            type: 'string'
          },
          end: {
            type: 'string'
          }
        }
      },
      location: {
        type: 'object',
        required: [
          'road',
          'county',
          'region',
          'latitude',
          'longitude'
        ],
        properties: {
          road: {
            type: 'string'
          },
          county: {
            type: 'string'
          },
          region: {
            type: 'string'
          },
          latitude: {
            type: 'number'
          },
          longitude: {
            type: 'number'
          }
        }
      }
    }
  }
}

describe('end-to-end', () => {
  describe('incidents', () => {
    test('it matches the schema', async () => {
      const result = await traffic.incidents('NORTH_WEST')

      expect(result).toMatchSchema(schema)
    })
  })
  describe('roadworks', () => {
    test('it matches the schema', async () => {
      const result = await traffic.roadworks('NORTH_WEST')

      expect(result).toMatchSchema(schema)
    })
  })
})
