// obtain a reference to the module
// when using the module in your project, this line would be
// const traffic = require('uk-traffic')
const traffic = require('../build')

async function main () {
  // fetch all roadworks for the west midlands
  const roadworks = await traffic.roadworks('WEST_MIDLANDS')

  // reduce the array of roadworks into a counter that looks something like
  /*
  {
    "Staffordshire": 12,
    "Derbyshire": 7
  }
  */
  const counterObj = roadworks.reduce((counter, event) => {
    counter[event.location.county] = (counter[event.location.county] || 0) + 1
    return counter
  }, {})

  // convert the object above into a sorted two-dimensional array that looks
  // something like
  /*
  [
    [ 'Staffordshire', 12 ],
    [ 'Derbyshire', 7 ]
  ]
  */
  const counterArr = Object.entries(counterObj)
    .reduce((arr, item) => {
      arr.push(item)
      return arr
    }, [])
    .sort((a, b) => b[1] - a[1])

  // extract the busiest county
  const busiestCounty = counterArr[0]

  // log our findings
  console.log(`${busiestCounty[0]} has the most roadworks in the west midlands with ${busiestCounty[1]}`)
}

main()
