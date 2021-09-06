const Twitter = require('twitter')
const config = require('../config')

const initiateTwitter = () => {
  const {
    TWITTER_API_KEY,
    TWITTER_API_KEY_SECRET,
    TWITTER_BEARER_TOKEN
  } = config()

  const client = new Twitter({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_KEY_SECRET,
    bearer_token: TWITTER_BEARER_TOKEN
  })

  return client
}

module.exports = initiateTwitter()
