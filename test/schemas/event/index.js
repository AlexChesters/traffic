module.exports = {
  type: 'object',
  required: ['title', 'category', 'delay', 'location'],
  additionalProperties: false,
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
    location: {
      type: 'object',
      required: ['region', 'road', 'county', 'latitude', 'longitude'],
      additionalProperties: false,
      properties: {
        region: {
          type: 'string'
        },
        road: {
          type: 'string'
        },
        county: {
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
