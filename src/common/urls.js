const base = 'https://m.highways.gov.uk/feeds/rss'

module.exports = {
  incidents: _ => `${base}/UnplannedEvents.xml`,
  roadworks: _ => `${base}/CurrentAndFutureEvents.xml`
}
