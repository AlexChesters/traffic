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

#### Incidents
```javascript
traffic.incidents(region: REGION?) : Promise
```
Takes a [region](#region), returns a promise containing an array of [events](#event).

#### Roadworks
```javascript
traffic.roadworks(region: REGION?) : Promise
```
Takes a [region](#region), returns a promise containing an array of [events](#event).

## Data Types
### Region
A Region is a constant representing a region which can be used to
narrow down results. The following is a list of valid regions:
* `SOUTH_EAST`
* `SOUTH_WEST`
* `EASTERN`
* `WEST_MIDLANDS`
* `EAST_MIDLANDS`
* `NORTH_WEST`
* `NORTH_EAST`

### Event
An Event is the standard data type returned by the module for all
functions. See below for an example.
```javascript
{
  "title": "M25 J25 clockwise access",
  "category": "Road Works",
  "delay": "Severe Disruption - in excess of 3 hours delay or road closure",
  "link": "https://www.mycooltrafficsite.com/1234",
  "location": {
    "road": "M25",
    "county": "Greater London Authority",
    "region": "Eastern",
    "latitude": 51.68319,
    "longitude": -0.04578481
  }
}
```
