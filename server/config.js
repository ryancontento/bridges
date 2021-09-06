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
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_API_KEY_SECRET: process.env.TWITTER_API_KEY_SECRET,
    TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN
  }
}

module.exports = config
