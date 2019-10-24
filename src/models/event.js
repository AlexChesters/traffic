module.exports = (raw) => {
  const title = raw.title.split('|')[0].trim()
  const region = raw['rss:region']['#']
  const county = raw['rss:county']['#']
  const road = raw['rss:road']['#']
  const latitude = Number.parseFloat(raw['rss:latitude']['#'])
  const longitude = Number.parseFloat(raw['rss:longitude']['#'])
  const [category, delay] = raw.categories
  const link = raw.link
  return {
    title,
    category: category.split(/(?=[A-Z])/).join(' '),
    delay,
    link,
    location: {
      road,
      county,
      region,
      latitude,
      longitude
    }
  }
}
