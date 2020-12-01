const fetch = require('node-fetch')
const fs = require('fs')

const radius = 5
const cities = require('./seed.json')

let maxId = 0
let url

let options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAAL95JwEAAAAA%2BHXhTUoCMMZevQt2kq0qMTwuDkQ%3D32LFyGWm49UV3oz3R3xNld4IqDTe1ua4ZkRcAzFerCQV2wgYMe',
    Cookie:
      'personalization_id="v1_LT8r3+BhOs+k4ZsQDiqyEw=="; guest_id=v1%3A160570801728849585',
  },
}

async function getDataForAllCities(cities) {
  for (let city of cities) {
    maxId = 0
    getPagesOfTweets(maxId, city, 5)
  }
}

async function getPagesOfTweets(startMaxId, city, pages) {
  maxId = startMaxId
  for (let i = 0; i < pages; i++) {
    url = `https://api.twitter.com/1.1/search/tweets.json?q=geocode:${city.lat},${city.lon},${radius}km&count=100&max_id=${maxId}&tweet_mode=extended`
    await get100Tweets(url, options, city.name, i + 1)
  }
}

async function get100Tweets(url, options, cityName, fileNumber) {
  const response = await fetch(url, options)
  const data = await response.json()
  maxId = await getMaxID(data)
  // reset MaxID
  fs.writeFileSync(
    `JSONDATA/${cityName}_${fileNumber}.json`,
    JSON.stringify(data)
  )
}

// HELPER FUNCTIIONS
function getMaxID(data) {
  nextResultsString = data.search_metadata.next_results
  const maxId = nextResultsString.match(/\d+/)[0]
  return maxId
}

// INIT

getDataForAllCities(cities)
