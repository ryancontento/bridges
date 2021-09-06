const dotenv = require('dotenv-safe')

// to use the config, require() this file and then:
// 
// const { TWITTER_BEARER_TOKEN } = config()
//
const config = () => {
  dotenv.config({
    example: './.env.example'
  })

  return {
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN
  }
}

module.exports = config
