const base = 'https://m.highwaysengland.co.uk/feeds/rss'
const regions = {
  SOUTH_EAST: 'South East',
  SOUTH_WEST: 'South West',
  EASTERN: 'Eastern',
  WEST_MIDLANDS: 'West Midlands',
  EAST_MIDLANDS: 'East Midlands',
  NORTH_WEST: 'North West',
  NORTH_EAST: 'North East'
}

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
