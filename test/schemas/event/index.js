module.exports = {
  type: 'object',
  required: ['title', 'category', 'delay', 'link', 'location'],
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
    link: {
      type: 'string',
      pattern: /^http|https/
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
