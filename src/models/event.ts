import { Event } from '../../'

interface RawData {
  title: string,
  'rss:region': {
    '#': string
  },
  'rss:county': {
    '#': string
  },
  'rss:road': {
    '#': string
  },
  'rss:eventstart': {
    '#': string
  },
  'rss:eventstop': {
    '#': string
  },
  'rss:latitude': {
    '#': string
  },
  'rss:longitude': {
    '#': string
  },
  categories: [string, string],
  link: string
}

export default (raw: RawData): Event => {
  const title = raw.title.split('|')[0].trim()
  const region = raw['rss:region']['#']
  const county = raw['rss:county']['#']
  const road = raw['rss:road']['#']
  const start = raw['rss:eventstart']['#']
  const end = raw['rss:eventend']['#']
  const latitude = Number.parseFloat(raw['rss:latitude']['#'])
  const longitude = Number.parseFloat(raw['rss:longitude']['#'])
  const [category, delay] = raw.categories
  const link = raw.link

  return {
    title,
    category: category,
    delay,
    link,
    timing: {
      start,
      end
    },
    location: {
      road,
      county,
      region,
      latitude,
      longitude
    }
  }
}
