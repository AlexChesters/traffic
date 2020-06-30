import { Region } from '../../'

const base = 'https://m.highwaysengland.co.uk/feeds/rss'

export default {
  incidents: (region: Region): string => {
    return region
      ? `${base}/UnplannedEvents/${region}.xml`
      : `${base}/UnplannedEvents.xml`
  },
  roadworks: (region: Region): string => {
    return region
      ? `${base}/CurrentAndFutureEvents/${region}.xml`
      : `${base}/CurrentAndFutureEvents.xml`
  }
}
