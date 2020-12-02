const fs = require('fs') // removes common words
const cityNames = require('./seed.json')

const database = JSON.parse(fs.readFileSync('database.json'))

const fetchCount = database.fetchCount

function createClock(database) {
  let clock = {}
  for (let city of cityNames) {
    cityName = city.name
    let times = getTimes(cityName, database[cityName])
    clock[cityName] = times
  }
  console.log(clock)
  return clock
}

function getTimes(cityName, cityObject) {
  let hoursArray = new Array(24).fill(0)

  for (let [key, value] of Object.entries(cityObject)) {
    const hour = +value.time.slice(11, 13)
    hoursArray[hour]++
    console.log(cityName, hour)
  }
  hoursArray = hoursArray.map(hour => {
    return Math.round(hour / fetchCount)
  })
  return hoursArray
}

let clock = createClock(database.cities)

createSunburst(clock)

function createSunburst(clock) {
  let labels = cityNames.map(city => city.name)
  console.log(labels)
  let data = {}
}
