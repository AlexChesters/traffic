const incidents = require('./src/data/incidents')
const roadworks = require('./src/data/roadworks')

const regions = require('./src/common/regions')

module.exports = {
  get: { incidents, roadworks },
  regions
}
