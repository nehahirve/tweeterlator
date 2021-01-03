const fs = require('fs')
const cities = require('./static/seed.json')

function saveTweets() {
  let data
  if (fs.existsSync(`database.json`)) {
    data = JSON.parse(fs.readFileSync(`database.json`))
  } else data = { fetchCount: 0, cities: {} }
  for (let city of cities) {
    let cityData = data.cities[city.name] || {}
    for (let i = 0; i < 100; i++) {
      let path = `JSONDATA/${city.name}_${i + 1}.json`
      if (fs.existsSync(path)) {
        let file = fs.readFileSync(path)
        let tweets = JSON.parse(file).statuses
        for (let tweet of tweets) {
          const id = tweet.id
          const text = tweet.full_text
          const time = tweet.created_at
          cityData[id] = { text, time }
        }
      }
    }
    data.cities[city.name] = cityData
  }
  data.fetchCount++
  data.lastFetched = Date.now()
  fs.writeFileSync(`database.json`, JSON.stringify(data))
}

saveTweets()
