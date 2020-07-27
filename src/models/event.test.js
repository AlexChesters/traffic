/* eslint-env jest */

import event from '../../build/src/models/event'

describe('event', () => {
  it('adapts the data correctly', () => {
    const raw = {
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

    const actual = event(raw)

    expect(actual.title).toEqual('M6 northbound between J32 and J33')
    expect(actual.category).toEqual('Road Works')
    expect(actual.delay).toEqual('No Delay')
    expect(actual.link).toEqual('http://www.trafficengland.com/?evtID=2714257')
    expect(actual.timing.start).toEqual('2018-12-18T11:30:00+00:00')
    expect(actual.timing.end).toEqual('2021-03-31T12:00:00+01:00')
    expect(actual.location.road).toEqual('M6')
    expect(actual.location.county).toEqual('Lancashire')
    expect(actual.location.region).toEqual('North West')
    expect(actual.location.latitude).toEqual(53.90963)
    expect(actual.location.longitude).toEqual(-2.7537072)
  })
})
