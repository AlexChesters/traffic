/* eslint-env jest */

import urls from '../../build/src/utils/urls'

describe('URLs', () => {
  describe('incidents', () => {
    test('defaults to all regions if one is not provided', () => {
      const url = urls.incidents()

      expect(url).toEqual('https://m.highwaysengland.co.uk/feeds/rss/UnplannedEvents.xml')
    })
    test('allows a region to be specified', () => {
      const url = urls.incidents('NORTH_WEST')

      expect(url).toEqual('https://m.highwaysengland.co.uk/feeds/rss/UnplannedEvents/North%20West.xml')
    })
  })
  describe('roadworks', () => {
    test('defaults to all regions if one is not provided', () => {
      const url = urls.roadworks()

      expect(url).toEqual('https://m.highwaysengland.co.uk/feeds/rss/CurrentAndFutureEvents.xml')
    })
    test('allows a region to be specified', () => {
      const url = urls.roadworks('NORTH_WEST')

      expect(url).toEqual('https://m.highwaysengland.co.uk/feeds/rss/CurrentAndFutureEvents/North%20West.xml')
    })
  })
})
