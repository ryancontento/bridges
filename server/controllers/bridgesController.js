const errorHandler = require('../utils/errorHandler')
const twitter = require('../services/twitter')
const parseTweet = require('../utils/tweetChecker')
const config = require('../config')

const getCapeFearBridge = async (req, res) => {
  try {
    const { CAPE_FEAR_BRIDGE_USER_ID } = config()
    const url = `/statuses/user_timeline`

    const tweets = await twitter.get(url, {
      user_id: CAPE_FEAR_BRIDGE_USER_ID
    })

    let bridgeStatus = false
    let tweetIndex = 0
    while (!bridgeStatus) {
      // if bridgeStatus is `false`, check next tweet
      bridgeStatus = parseTweet(tweets[tweetIndex])
      tweetIndex++
    }

    res.status(200).json(bridgeStatus)
  } catch (err) {
    console.log(err)
    errorHandler(err, res)
  }
}

const getIsabellaHolmesBridge = async (req, res) => {
  try {
    res.status(200).json({
      open: false
    })
  } catch (err) {
    errorHandler(err, res)
  }
}

module.exports = {
  getCapeFearBridge,
  getIsabellaHolmesBridge
}
