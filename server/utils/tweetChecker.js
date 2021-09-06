// @param inTweet <string>
//
// @returns 
const parseTweet = (inTweet) => {
  const words = inTweet.text.split(' ').map((s) => s.replace('.',''))

  // both of these times are numbers in seconds
  const tweetCreatedAt = new Date(inTweet.created_at).getTime()
  const now = Date.now()

  const tweetCreatedHoursAgo = Math.abs(now - tweetCreatedAt) / 36e5;
  const isTweetOld = tweetCreatedHoursAgo > 0.5

  for(let i = 0; i < words.length; i++) {
    if (words[i].trim().toLowerCase() === 'now') {
      const nextWord = words[i+1].trim().toLowerCase()
      const isOpen = nextWord === 'opening'

      if (isOpen && isTweetOld) {
        return {
          open: false
        }
      }
      
      return {
        open: isOpen
      }
    }
  }

  return false
}

module.exports = parseTweet
