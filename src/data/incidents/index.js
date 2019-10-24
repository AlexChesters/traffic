const parser = require('rss-url-parser')
const R = require('ramda')
const debug = require('debug')('traffic')

const urls = require('../../common/urls')
const event = require('../../models/event')

module.exports = async (region) => {
  const url = urls.incidents(region)
  debug('Making request to', url)
  const data = await parser(url)
  return R.map(event, data)
}
