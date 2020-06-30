// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('uk-traffic')
const traffic = require('../build')

async function main () {
  // fetch all roadworks for the north west
  const roadworks = await traffic.roadworks('NORTH_WEST')

  // determine the current date
  const now = new Date()

  // filter the list of roadworks to only include events that are currently
  // active
  const ongoingRoadworks = roadworks.filter((event) => {
    const start = new Date(event.timing.start)
    const end = new Date(event.timing.end)
    return now.getTime() <= end.getTime() && now.getTime() >= start.getTime()
  })

  // log out how many current roadworks there are
  console.log(`there are currently ${ongoingRoadworks.length} roadworks in the north west`)
}

main()
