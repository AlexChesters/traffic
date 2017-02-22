const parser = require('rss-url-parser')
const R = require('ramda')

const urls = require('../../common/urls')
const event = require('../../models/event')

module.exports = async _ => {
  const data = await parser(urls.incidents())
  return R.map(event, data)
}
