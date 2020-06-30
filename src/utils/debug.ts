/* eslint-disable @typescript-eslint/no-explicit-any */

import debug from 'debug'

export default (...msg: any[]): void => debug('uk-traffic')(...msg)
