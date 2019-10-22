const regions = require('./regions')

const base = 'https://m.highwaysengland.co.uk/feeds/rss'

module.exports = {
  incidents: (region) => {
    return region
      ? `${base}/UnplannedEvents/${encodeURIComponent(regions[region])}.xml`
      : `${base}/UnplannedEvents.xml`
  },
  roadworks: (region) => {
    return region
      ? `${base}/CurrentAndFutureEvents/${encodeURIComponent(regions[region])}.xml`
      : `${base}/CurrentAndFutureEvents.xml`
  }
}
