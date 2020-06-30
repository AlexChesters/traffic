import incidents from './src/fetch-incidents.js'
import roadworks from './src/fetch-roadworks.js'

enum Region {
  SOUTH_EAST = 'South East',
  SOUTH_WEST = 'South West',
  EASTERN = 'Eastern',
  WEST_MIDLANDS = 'West Midlands',
  EAST_MIDLANDS = 'East Midlands',
  NORTH_WEST = 'North West',
  NORTH_EAST = 'North East'
}

interface Event {
  title: string,
  category: string,
  delay: string,
  link: string,
  timing: {
    start: string,
    end: string
  },
  location: {
    road: string,
    county: string,
    region: string,
    latitude: number,
    longitude: number
  }
}

export { incidents, roadworks, Region, Event }
