import * as parser from 'rss-url-parser'
import debug from 'debug'

import { Region } from '../'
import urls from './utils/urls.js'
import event from './models/event.js'

export default async (region: Region) => {
  const url = urls.incidents(region)
  debug('traffic')('Making request to', url)
  const data = await parser(url)
  return data.map(event)
}
