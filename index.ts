import incidents from './src/fetch-incidents.js'
import roadworks from './src/fetch-roadworks.js'

enum Region {
  SOUTH_EAST = 'South%20East',
  SOUTH_WEST = 'South%20West',
  EASTERN = 'Eastern',
  WEST_MIDLANDS = 'West%20Midlands',
  EAST_MIDLANDS = 'East%20Midlands',
  NORTH_WEST = 'North%20West',
  NORTH_EAST = 'North%20East'
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
