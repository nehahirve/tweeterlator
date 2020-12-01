const fs = require('fs') // removes common words
const cities = require('./seed.json')

// const oldClock = fs.readFileSync('data_heatmap.json')
const newClock = getDateData(cities)
// const times = addnewClockToOldClock(newClock, oldClock)

function addnewClockToOldClock() {
  for (let city of cities) {
    console.log(oldClock[city])
  }
}

fs.writeFileSync('data_heatmap_storage.json', JSON.stringify(newClock))

function getDateData(citiesObject) {
  let data = {}
  for (let city of cities) {
    let times = getDates(city)
    data[city.name] = times
  }
  return data
}

function getDates(city) {
  const clock = {}
  for (let i = 0; i < 10; i++) {
    let tweetFile = fs.readFileSync(`JSONDATA/${city.name}_${i + 1}.json`)
    let tweets = JSON.parse(tweetFile).statuses
    for (let tweet of tweets) {
      let hour = +tweet.created_at.slice(11, 13)
      if (clock[hour]) {
        clock[hour]++
      } else {
        clock[hour] = 1
      }
    }
  }
  return clock
}

// Tue Dec 01 12:50:45 +0000 2020
