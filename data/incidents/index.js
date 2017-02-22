const parser = require('rss-url-parser')
const R = require('ramda')

const event = require('../../models/event')

module.exports = async _ => {
  const data = await parser('https://m.highways.gov.uk/feeds/rss/UnplannedEvents.xml')
  return R.map(event, data)
}
