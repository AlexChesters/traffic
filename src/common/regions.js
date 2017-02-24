const R = require('ramda')
const capitalize = require('capitalize')

const regions = {
  SOUTH_EAST: 'South East',
  SOUTH_WEST: 'South West',
  EASTERN: 'Eastern',
  WEST_MIDLANDS: 'West Midlands',
  EAST_MIDLANDS: 'East Midlands',
  NORTH_WEST: 'North West',
  NORTH_EAST: 'North East'
}

module.exports = Object.assign({}, regions, {
  isValid: region => {
    const sanitise = R.compose(capitalize.words)
    return (R.invertObj(regions))[sanitise(region)]
  }
})
