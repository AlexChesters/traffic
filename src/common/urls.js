const base = 'https://m.highways.gov.uk/feeds/rss'

module.exports = {
  incidents: region => {
    return region
      ? `${base}/UnplannedEvents/${encodeURIComponent(region)}.xml`
      : `${base}/UnplannedEvents.xml`
  },
  roadworks: region => {
    return region
      ? `${base}/CurrentAndFutureEvents/${encodeURIComponent(region)}.xml`
      : `${base}/CurrentAndFutureEvents.xml`
  }
}
