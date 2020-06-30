const base = 'https://m.highwaysengland.co.uk/feeds/rss'

enum Region {
  SOUTH_EAST = 'South East',
  SOUTH_WEST = 'South West',
  EASTERN = 'Eastern',
  WEST_MIDLANDS = 'West Midlands',
  EAST_MIDLANDS = 'East Midlands',
  NORTH_WEST = 'North West',
  NORTH_EAST = 'North East'
}

export default {
  incidents: (region: Region) => {
    return region
      ? `${base}/UnplannedEvents/${encodeURIComponent(Region[region])}.xml`
      : `${base}/UnplannedEvents.xml`
  },
  roadworks: (region: Region) => {
    return region
      ? `${base}/CurrentAndFutureEvents/${encodeURIComponent(Region[region])}.xml`
      : `${base}/CurrentAndFutureEvents.xml`
  }
}
