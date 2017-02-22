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

The module itself is an object. The properties on this object are
functions that return promises containing the data.

## Properties
### Incidents
```javascript
traffic.incidents()
```
Returns a promise containing an array of [events](#event).

### Roadworks
```javascript
traffic.roadworks()
```
Returns a promise containing an array of [events](#event).

## Data Types
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
