const parser = require('rss-url-parser')
const debug = require('debug')('traffic')

const urls = require('./utils/urls')
const event = require('./models/event')

module.exports = async (region) => {
  const url = urls.roadworks(region)
  debug('Making request to', url)
  const data = await parser(url)
  return data.map(event)
}
