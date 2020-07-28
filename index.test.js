/* eslint-env jest */
/* eslint-disable @typescript-eslint/no-var-requires */

const traffic = require('./build')

const parser = require('rss-url-parser')

jest.mock('rss-url-parser')

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const objectSchema = {
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

const arraySchema = {
  type: 'array',
  items: objectSchema
}

describe('end-to-end', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('incidents', () => {
    it('handles bad data', async () => {
      parser.mockImplementation(() =>
        [
          {
            title: 'M6 northbound between J32 and J33 | Northbound | Road Works',
            description: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            summary: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            date: '2020-07-27T11:45:59.000Z',
            pubdate: '2020-07-27T11:45:59.000Z',
            pubDate: '2020-07-27T11:45:59.000Z',
            link: 'http://www.trafficengland.com/?evtID=2714257',
            guid: 'GUID1-2714257',
            author: 'info@highwaysengland.co.uk',
            comments: null,
            origlink: null,
            image: {},
            source: {},
            categories: ['Road Works', 'No Delay'],
            enclosures: [],
            'rss:@': {},
            'rss:author': {
              '@': {},
              '#': 'info@highwaysengland.co.uk',
              name: '',
              email: 'info@highwaysengland.co.uk'
            },
            'rss:category': [{ '@': {}, '#': 'Road Works' }, { '@': {}, '#': 'No Delay' }],
            'rss:description': {
              '@': {},
              '#': 'Location : The M6 northbound between junctions J32  and J33 . \n' +
                'Lane Closures : The hard shoulder is closed. \n' +
                'Reason : Roadworks. \n' +
                'Status : Currently Active. \n' +
                'Period : expect disruption until 12:00 on 31 March 2021.'
            },
            'rss:guid': { '@': { ispermalink: 'false' }, '#': 'GUID1-2714257' },
            'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/?evtID=2714257' },
            'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 11:45:59 GMT' },
            'rss:title': {
              '@': {},
              '#': 'M6 northbound between J32 and J33 | Northbound | Road Works'
            },
            'rss:reference': { '@': {}, '#': 'RW-20-01-21-200812' },
            'rss:road': { '@': {}, '#': 'M6' },
            'rss:region': { '@': {}, '#': 'North West' },
            'rss:county': { '@': {}, '#': 'Lancashire' },
            'rss:latitude': { '@': {}, '#': '53.90963' },
            'rss:longitude': { '@': {}, '#': '-2.7537072' },
            'rss:overallstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:overallend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            'rss:eventstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:eventend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            meta: {
              '#ns': [],
              '@': [],
              '#xml': { version: '1.0', encoding: 'UTF-8', standalone: 'yes' },
              '#type': 'rss',
              '#version': '2.0',
              title: 'Events for the North West',
              description: "The latest incident information for England's motorway and trunk routes provided by Highways England",
              date: '2020-07-27T13:38:35.000Z',
              pubdate: '2020-07-27T13:38:35.000Z',
              pubDate: '2020-07-27T13:38:35.000Z',
              link: 'http://www.trafficengland.com/',
              xmlurl: null,
              xmlUrl: null,
              author: null,
              language: 'en-gb',
              favicon: null,
              copyright: 'Copyright 2001',
              generator: 'HE-DATEX',
              cloud: {},
              image: {
                url: 'http://www.highways.gov.uk/wp-content/images/header-logo-ha.png',
                title: 'Latest Traffic Information for England - All confirmed events'
              },
              categories: [],
              'rss:@': {},
              'rss:copyright': { '@': {}, '#': 'Copyright 2001' },
              'rss:description': {
                '@': {},
                '#': "The latest incident information for England's motorway and trunk routes provided by Highways England"
              },
              'rss:generator': { '@': {}, '#': 'HE-DATEX' },
              'rss:image': {
                '@': {},
                url: [Object],
                title: [Object],
                link: [Object],
                width: [Object],
                height: [Object]
              },
              'rss:language': { '@': {}, '#': 'en-gb' },
              'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/' },
              'rss:lastbuilddate': { '@': {}, '#': 'Mon, 27 Jul 2020 14:38:35 +0100' },
              'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 13:38:35 GMT' },
              'rss:title': { '@': {}, '#': 'Events for the North West' },
              'rss:ttl': { '@': {}, '#': '2' }
            }
          },
          {
            foo: 'bar'
          }
        ]
      )

      const result = await traffic.roadworks(traffic.Region.NORTH_WEST)

      expect(result.length).toEqual(1)
      expect(result[0]).toMatchSchema(objectSchema)
    })

    it('it matches the schema', async () => {
      parser.mockImplementation(() =>
        [
          {
            title: 'M6 northbound between J32 and J33 | Northbound | Road Works',
            description: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            summary: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            date: '2020-07-27T11:45:59.000Z',
            pubdate: '2020-07-27T11:45:59.000Z',
            pubDate: '2020-07-27T11:45:59.000Z',
            link: 'http://www.trafficengland.com/?evtID=2714257',
            guid: 'GUID1-2714257',
            author: 'info@highwaysengland.co.uk',
            comments: null,
            origlink: null,
            image: {},
            source: {},
            categories: ['Road Works', 'No Delay'],
            enclosures: [],
            'rss:@': {},
            'rss:author': {
              '@': {},
              '#': 'info@highwaysengland.co.uk',
              name: '',
              email: 'info@highwaysengland.co.uk'
            },
            'rss:category': [{ '@': {}, '#': 'Road Works' }, { '@': {}, '#': 'No Delay' }],
            'rss:description': {
              '@': {},
              '#': 'Location : The M6 northbound between junctions J32  and J33 . \n' +
                'Lane Closures : The hard shoulder is closed. \n' +
                'Reason : Roadworks. \n' +
                'Status : Currently Active. \n' +
                'Period : expect disruption until 12:00 on 31 March 2021.'
            },
            'rss:guid': { '@': { ispermalink: 'false' }, '#': 'GUID1-2714257' },
            'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/?evtID=2714257' },
            'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 11:45:59 GMT' },
            'rss:title': {
              '@': {},
              '#': 'M6 northbound between J32 and J33 | Northbound | Road Works'
            },
            'rss:reference': { '@': {}, '#': 'RW-20-01-21-200812' },
            'rss:road': { '@': {}, '#': 'M6' },
            'rss:region': { '@': {}, '#': 'North West' },
            'rss:county': { '@': {}, '#': 'Lancashire' },
            'rss:latitude': { '@': {}, '#': '53.90963' },
            'rss:longitude': { '@': {}, '#': '-2.7537072' },
            'rss:overallstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:overallend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            'rss:eventstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:eventend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            meta: {
              '#ns': [],
              '@': [],
              '#xml': { version: '1.0', encoding: 'UTF-8', standalone: 'yes' },
              '#type': 'rss',
              '#version': '2.0',
              title: 'Events for the North West',
              description: "The latest incident information for England's motorway and trunk routes provided by Highways England",
              date: '2020-07-27T13:38:35.000Z',
              pubdate: '2020-07-27T13:38:35.000Z',
              pubDate: '2020-07-27T13:38:35.000Z',
              link: 'http://www.trafficengland.com/',
              xmlurl: null,
              xmlUrl: null,
              author: null,
              language: 'en-gb',
              favicon: null,
              copyright: 'Copyright 2001',
              generator: 'HE-DATEX',
              cloud: {},
              image: {
                url: 'http://www.highways.gov.uk/wp-content/images/header-logo-ha.png',
                title: 'Latest Traffic Information for England - All confirmed events'
              },
              categories: [],
              'rss:@': {},
              'rss:copyright': { '@': {}, '#': 'Copyright 2001' },
              'rss:description': {
                '@': {},
                '#': "The latest incident information for England's motorway and trunk routes provided by Highways England"
              },
              'rss:generator': { '@': {}, '#': 'HE-DATEX' },
              'rss:image': {
                '@': {},
                url: [Object],
                title: [Object],
                link: [Object],
                width: [Object],
                height: [Object]
              },
              'rss:language': { '@': {}, '#': 'en-gb' },
              'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/' },
              'rss:lastbuilddate': { '@': {}, '#': 'Mon, 27 Jul 2020 14:38:35 +0100' },
              'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 13:38:35 GMT' },
              'rss:title': { '@': {}, '#': 'Events for the North West' },
              'rss:ttl': { '@': {}, '#': '2' }
            }
          }
        ]
      )

      const result = await traffic.incidents(traffic.Region.NORTH_WEST)

      expect(result).toMatchSchema(arraySchema)
    })
  })
  describe('roadworks', () => {
    it('handles bad data', async () => {
      parser.mockImplementation(() =>
        [
          {
            title: 'M6 northbound between J32 and J33 | Northbound | Road Works',
            description: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            summary: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            date: '2020-07-27T11:45:59.000Z',
            pubdate: '2020-07-27T11:45:59.000Z',
            pubDate: '2020-07-27T11:45:59.000Z',
            link: 'http://www.trafficengland.com/?evtID=2714257',
            guid: 'GUID1-2714257',
            author: 'info@highwaysengland.co.uk',
            comments: null,
            origlink: null,
            image: {},
            source: {},
            categories: ['Road Works', 'No Delay'],
            enclosures: [],
            'rss:@': {},
            'rss:author': {
              '@': {},
              '#': 'info@highwaysengland.co.uk',
              name: '',
              email: 'info@highwaysengland.co.uk'
            },
            'rss:category': [{ '@': {}, '#': 'Road Works' }, { '@': {}, '#': 'No Delay' }],
            'rss:description': {
              '@': {},
              '#': 'Location : The M6 northbound between junctions J32  and J33 . \n' +
                'Lane Closures : The hard shoulder is closed. \n' +
                'Reason : Roadworks. \n' +
                'Status : Currently Active. \n' +
                'Period : expect disruption until 12:00 on 31 March 2021.'
            },
            'rss:guid': { '@': { ispermalink: 'false' }, '#': 'GUID1-2714257' },
            'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/?evtID=2714257' },
            'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 11:45:59 GMT' },
            'rss:title': {
              '@': {},
              '#': 'M6 northbound between J32 and J33 | Northbound | Road Works'
            },
            'rss:reference': { '@': {}, '#': 'RW-20-01-21-200812' },
            'rss:road': { '@': {}, '#': 'M6' },
            'rss:region': { '@': {}, '#': 'North West' },
            'rss:county': { '@': {}, '#': 'Lancashire' },
            'rss:latitude': { '@': {}, '#': '53.90963' },
            'rss:longitude': { '@': {}, '#': '-2.7537072' },
            'rss:overallstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:overallend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            'rss:eventstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:eventend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            meta: {
              '#ns': [],
              '@': [],
              '#xml': { version: '1.0', encoding: 'UTF-8', standalone: 'yes' },
              '#type': 'rss',
              '#version': '2.0',
              title: 'Events for the North West',
              description: "The latest incident information for England's motorway and trunk routes provided by Highways England",
              date: '2020-07-27T13:38:35.000Z',
              pubdate: '2020-07-27T13:38:35.000Z',
              pubDate: '2020-07-27T13:38:35.000Z',
              link: 'http://www.trafficengland.com/',
              xmlurl: null,
              xmlUrl: null,
              author: null,
              language: 'en-gb',
              favicon: null,
              copyright: 'Copyright 2001',
              generator: 'HE-DATEX',
              cloud: {},
              image: {
                url: 'http://www.highways.gov.uk/wp-content/images/header-logo-ha.png',
                title: 'Latest Traffic Information for England - All confirmed events'
              },
              categories: [],
              'rss:@': {},
              'rss:copyright': { '@': {}, '#': 'Copyright 2001' },
              'rss:description': {
                '@': {},
                '#': "The latest incident information for England's motorway and trunk routes provided by Highways England"
              },
              'rss:generator': { '@': {}, '#': 'HE-DATEX' },
              'rss:image': {
                '@': {},
                url: [Object],
                title: [Object],
                link: [Object],
                width: [Object],
                height: [Object]
              },
              'rss:language': { '@': {}, '#': 'en-gb' },
              'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/' },
              'rss:lastbuilddate': { '@': {}, '#': 'Mon, 27 Jul 2020 14:38:35 +0100' },
              'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 13:38:35 GMT' },
              'rss:title': { '@': {}, '#': 'Events for the North West' },
              'rss:ttl': { '@': {}, '#': '2' }
            }
          },
          {
            foo: 'bar'
          }
        ]
      )

      const result = await traffic.roadworks(traffic.Region.NORTH_WEST)

      expect(result.length).toEqual(1)
      expect(result[0]).toMatchSchema(objectSchema)
    })

    it('it matches the schema', async () => {
      parser.mockImplementation(() =>
        [
          {
            title: 'M6 northbound between J32 and J33 | Northbound | Road Works',
            description: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            summary: 'Location : The M6 northbound between junctions J32  and J33 . \n' +
              'Lane Closures : The hard shoulder is closed. \n' +
              'Reason : Roadworks. \n' +
              'Status : Currently Active. \n' +
              'Period : expect disruption until 12:00 on 31 March 2021.',
            date: '2020-07-27T11:45:59.000Z',
            pubdate: '2020-07-27T11:45:59.000Z',
            pubDate: '2020-07-27T11:45:59.000Z',
            link: 'http://www.trafficengland.com/?evtID=2714257',
            guid: 'GUID1-2714257',
            author: 'info@highwaysengland.co.uk',
            comments: null,
            origlink: null,
            image: {},
            source: {},
            categories: ['Road Works', 'No Delay'],
            enclosures: [],
            'rss:@': {},
            'rss:author': {
              '@': {},
              '#': 'info@highwaysengland.co.uk',
              name: '',
              email: 'info@highwaysengland.co.uk'
            },
            'rss:category': [{ '@': {}, '#': 'Road Works' }, { '@': {}, '#': 'No Delay' }],
            'rss:description': {
              '@': {},
              '#': 'Location : The M6 northbound between junctions J32  and J33 . \n' +
                'Lane Closures : The hard shoulder is closed. \n' +
                'Reason : Roadworks. \n' +
                'Status : Currently Active. \n' +
                'Period : expect disruption until 12:00 on 31 March 2021.'
            },
            'rss:guid': { '@': { ispermalink: 'false' }, '#': 'GUID1-2714257' },
            'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/?evtID=2714257' },
            'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 11:45:59 GMT' },
            'rss:title': {
              '@': {},
              '#': 'M6 northbound between J32 and J33 | Northbound | Road Works'
            },
            'rss:reference': { '@': {}, '#': 'RW-20-01-21-200812' },
            'rss:road': { '@': {}, '#': 'M6' },
            'rss:region': { '@': {}, '#': 'North West' },
            'rss:county': { '@': {}, '#': 'Lancashire' },
            'rss:latitude': { '@': {}, '#': '53.90963' },
            'rss:longitude': { '@': {}, '#': '-2.7537072' },
            'rss:overallstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:overallend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            'rss:eventstart': { '@': {}, '#': '2018-12-18T11:30:00+00:00' },
            'rss:eventend': { '@': {}, '#': '2021-03-31T12:00:00+01:00' },
            meta: {
              '#ns': [],
              '@': [],
              '#xml': { version: '1.0', encoding: 'UTF-8', standalone: 'yes' },
              '#type': 'rss',
              '#version': '2.0',
              title: 'Events for the North West',
              description: "The latest incident information for England's motorway and trunk routes provided by Highways England",
              date: '2020-07-27T13:38:35.000Z',
              pubdate: '2020-07-27T13:38:35.000Z',
              pubDate: '2020-07-27T13:38:35.000Z',
              link: 'http://www.trafficengland.com/',
              xmlurl: null,
              xmlUrl: null,
              author: null,
              language: 'en-gb',
              favicon: null,
              copyright: 'Copyright 2001',
              generator: 'HE-DATEX',
              cloud: {},
              image: {
                url: 'http://www.highways.gov.uk/wp-content/images/header-logo-ha.png',
                title: 'Latest Traffic Information for England - All confirmed events'
              },
              categories: [],
              'rss:@': {},
              'rss:copyright': { '@': {}, '#': 'Copyright 2001' },
              'rss:description': {
                '@': {},
                '#': "The latest incident information for England's motorway and trunk routes provided by Highways England"
              },
              'rss:generator': { '@': {}, '#': 'HE-DATEX' },
              'rss:image': {
                '@': {},
                url: [Object],
                title: [Object],
                link: [Object],
                width: [Object],
                height: [Object]
              },
              'rss:language': { '@': {}, '#': 'en-gb' },
              'rss:link': { '@': {}, '#': 'http://www.trafficengland.com/' },
              'rss:lastbuilddate': { '@': {}, '#': 'Mon, 27 Jul 2020 14:38:35 +0100' },
              'rss:pubdate': { '@': {}, '#': 'Mon, 27 Jul 2020 13:38:35 GMT' },
              'rss:title': { '@': {}, '#': 'Events for the North West' },
              'rss:ttl': { '@': {}, '#': '2' }
            }
          }
        ]
      )

      const result = await traffic.roadworks(traffic.Region.NORTH_WEST)

      expect(result).toMatchSchema(arraySchema)
    })
  })
})
