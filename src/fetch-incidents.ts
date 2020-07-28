import * as parser from 'rss-url-parser'

import debug from './utils/debug'
import { Region, Event } from '../'
import urls from './utils/urls.js'
import event from './models/event.js'

export default async (region: Region): Promise<Event[]> => {
  debug('Requesting incidents for', region)
  const url = urls.incidents(region)
  debug('Fetching data from', url)
  const data = await parser(url)
  return data.map(event).filter(Boolean)
}
