# traffic
A Node module to provide access to UK traffic information

# Prerequisities
A Node.js environment with `async/await`

# Installation
`npm install uk-traffic`

# API
First you must obtain a reference to the module:
```javascript
const traffic = require('uk-traffic')
```

## Properties
### `traffic.get`
All sub-properties of the get property are used to return traffic data.

#### Incidents
```javascript
traffic.get.incidents(region: REGION?) : Promise
```
Takes a [region](#region), returns a promise containing an array of [events](#event).

#### Roadworks
```javascript
traffic.get.roadworks(region: REGION?) : Promise
```
Takes a [region](#region), returns a promise containing an array of [events](#event).

### `traffic.regions`
Contains information about the different regions available. Also
exposes a helper function to determine if a region is valid.
```javascript
traffic.regions.isValid(region: String) : String?
```
If the region is valid the value returned will be an object key that
can be used on the `traffic.regions` property. See below for an example
usage
```javascript
const validRegion = traffic.regions.isValid('North West')
if (validRegion) {
  const data = await traffic.get.incidents(validRegion)
} else {
  console.error('Invalid region')
}
```

## Data Types
### Region
A Region is a constant representing a region which can be used to
narrow down results. The availble regions are exposed as
`traffic.regions`.
```javascript
{
  SOUTH_EAST: 'South East',
  SOUTH_WEST: 'South West',
  EASTERN: 'Eastern',
  WEST_MIDLANDS: 'West Midlands',
  EAST_MIDLANDS: 'East Midlands',
  NORTH_WEST: 'North West',
  NORTH_EAST: 'North East'
}
```

### Event
An Event is the standard data type returned by the module for all
functions. See below for an example.
```javascript
{
  "title": "M25 J25 clockwise access",
  "category": "Road Works",
  "delay": "Severe Disruption - in excess of 3 hours delay or road closure",
  "location": {
    "road": "M25",
    "county": "Greater London Authority",
    "region": "Eastern",
    "latitude": 51.68319,
    "longitude": -0.04578481
  }
}
```

## Debugging/Troubleshooting
Simply run the Node process with `DEBUG=traffic` to expose debug logging.
