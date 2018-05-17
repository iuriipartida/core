'use strict'

const container = require('@arkecosystem/core-container')

/**
 * Start a forger.
 * @param  {Object} options
 * @return {void}
 */
module.exports = async (options) => {
  await container.start({
    data: options.data,
    config: options.config
  }, {
    include: [
      '@arkecosystem/core-event-emitter',
      '@arkecosystem/validation',
      '@arkecosystem/core-config',
      '@arkecosystem/core-config-json',
      '@arkecosystem/core-logger',
      '@arkecosystem/core-logger-winston',
      '@arkecosystem/core-forger'
    ],
    options: {
      '@arkecosystem/core-blockchain': {
        networkStart: options.networkStart
      },
      '@arkecosystem/core-forger': {
        bip38: options.bip38,
        address: options.address,
        password: options.password
      }
    }
  })
}
