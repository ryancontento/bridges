// @param inTweet <string>
//
// @returns 
const parseTweet = (inTweet) => {
  console.log('in tweet:', inTweet)
  const words = inTweet.text.split(' ').map((s) => s.replace('.',''))

  for(let i = 0; i < words.length; i++) {
    if (words[i].trim().toLowerCase() === 'now') {
      const nextWord = words[i+1].trim().toLowerCase()
      
      return {
        open: nextWord === 'opening'
      }
    }
  }

  return false
}

module.exports = parseTweet
