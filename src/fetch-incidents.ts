import parser from 'rss-url-parser'
import debug from 'debug'

import urls from './utils/urls'
import event from './models/event'

export default async (region) => {
  const url = urls.incidents(region)
  debug('traffic')('Making request to', url)
  const data = await parser(url)
  return data.map(event)
}
