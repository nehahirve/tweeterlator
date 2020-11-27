const fetch = require("node-fetch")
const fs = require("fs")

const radius = 5
const cities = [
  { name: "stockholm", lat: 59.33258, lon: 18.0649 },
  { name: "malmö", lat: 55.60587, lon: 13.00073 },
  { name: "umeå", lat: 63.82842, lon: 20.25972 },
  { name: "sundsvall", lat: 62.39129, lon: 17.3063 },
  { name: "göteborg", lat: 57.650002, lon: 12.016667 },
  { name: "karlstad", lat: 59.3793, lon: 13.50357},
  { name: "kiruna", lat: 67.85572, lon: 20.22513},
]

let maxId = 0
let url

let options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAL95JwEAAAAA%2BHXhTUoCMMZevQt2kq0qMTwuDkQ%3D32LFyGWm49UV3oz3R3xNld4IqDTe1ua4ZkRcAzFerCQV2wgYMe",
    Cookie:
      'personalization_id="v1_LT8r3+BhOs+k4ZsQDiqyEw=="; guest_id=v1%3A160570801728849585',
  },
}

async function getDataForAllCities(cities) {
  for (let city of cities) {
    maxId = 0
    get100sOfTweets(maxId, city, 5)
  }
}

async function get100sOfTweets(startMaxId, city, number) {
  maxId = startMaxId
  for (let i = 0; i < number; i++) {
    url = `https://api.twitter.com/1.1/search/tweets.json?q=geocode:${city.lat},${city.lon},${radius}km&count=100&max_id=${maxId}`
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
