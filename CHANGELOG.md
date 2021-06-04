# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.1] - 2021-06-04
Fixes some security vulnerabilities

## [3.0.1] - 2020-07-28
* Fixes a bug where one malformed event could result in the call itself throwing
    * Now this event will be filtered out before any valid ones are returned

## [3.0.0] - 2020-07-22
* Changes the debug environment variable needed to enable additional logging
    * Before - `DEBUG=traffic`
    * After - `DEBUG=uk-traffic`
* Fixes a security vulnerability ([lodash (#1523)](https://www.npmjs.com/advisories/1523))
* Fixes an error when building the project locally

## [2.0.1] - 2020-06-30
* Fixes a bug where the raw TypeScript files were references by the package rather
than the transpiled JavaScript

## [2.0.0] - 2020-06-30
In 1.x.x both `traffic.roadworks` and `traffic.incidents` accepted a `region`
parameter such as `NORTH_WEST`, internally this was mapped to something like
`north%20west` to match what the underlying API expects.

From 2.x.x onwards, `traffic.roadworks` and `traffic.incidents` now pass the
given parameter directly to the underlying API. An enum (`traffic.Region`) is
exposed which should be used to select a region correctly.

Before:
```javascript
await traffic.roadworks('NORTH WEST')
```

After:
```javascript
await traffic.roadworks(traffic.Region.NORTH_WEST)
```

## [1.0.0] - 2020-06-18
First release of the library
