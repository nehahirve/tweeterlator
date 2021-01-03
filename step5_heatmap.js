const fs = require('fs') // removes common words
const cityNames = require('./seed.json')

const database = JSON.parse(fs.readFileSync('database.json'))

const fetchCount = database.fetchCount

const color = 'red'

function createClock(database) {
  let clock = {}
  for (let city of cityNames) {
    cityName = city.name
    let times = getTimes(cityName, database[cityName])
    clock[cityName] = times
  }
  return clock
}

function getTimes(cityName, cityObject) {
  let hoursArray = new Array(24).fill(0)
  let total = 0
  for (let [key, value] of Object.entries(cityObject)) {
    const hour = +value.time.slice(11, 13)
    hoursArray[hour]++
    console.log(hoursArray[hour])
    total += hoursArray[hour]
  }
  // console.log(total)
  hoursArray = hoursArray.map(hour => {
    return hour / total
  })
  return hoursArray
}

let clock = createClock(database.cities)

let maxValue = getMaxValue(Object.entries(clock).map(entry => entry[1]))

// console.log(Object.entries(clock))

for (let city of cityNames) {
  clock[city.name] = clock[city.name].map(number => {
    return colourMap(number, maxValue)
  })
}

console.log(clock)

function getMaxValue(array) {
  let compare = []
  for (let item of array) {
    let sorted = [...item]
    compare.push(sorted.sort((a, b) => b - a)[0])
  }
  return compare.sort((a, b) => b - a)[0]
}

function colourMap(input, inputEnd) {
  const outputStart = 0
  const outputEnd = 1
  const inputStart = 0
  // const inputEnd = 500
  const slope = (outputEnd - outputStart) / (inputEnd - inputStart)
  return outputStart + slope * (input - inputStart)
}

fs.writeFileSync('clock.json', JSON.stringify(clock))

// console.log(clock)

createSunburst(clock)

function createSunburst(clock) {
  let data = { children: [] }

  let labels = cityNames.map(city => city.name)

  function pushBase(label) {
    for (let i = 0; i < 24; i++) {
      data.children.push({
        title: `${label}_${i}`,
        color: `rgba(0, 0, 0, ${clock[label][i]})`,
        children: [],
      })
    }
  }
  pushBase(labels[0])

  pushMalmo(data.children, labels[1])
  pushUmea(data.children, labels[2])
  pushSundsvall(data.children, labels[3])
  pushGothenburg(data.children, labels[4])
  pushKarlstad(data.children, labels[5])
  pushKiruna(data.children, labels[6])

  function pushKiruna(base, label) {
    for (let child of base) {
      child.children[0].children[0].children[0].children[0].children[0].children.push(
        {
          title: `${label}_${base.indexOf(child)}`,
          color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,
          children: [],
          size: 10,
        }
      )
    }
  }

  function pushKarlstad(base, label) {
    for (let child of base) {
      child.children[0].children[0].children[0].children[0].children.push({
        title: `${label}_${base.indexOf(child)}`,
        color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,
        children: [],
      })
    }
  }

  function pushGothenburg(base, label) {
    for (let child of base) {
      child.children[0].children[0].children[0].children.push({
        title: `${label}_${base.indexOf(child)}`,
        color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,

        children: [],
      })
    }
  }

  function pushSundsvall(base, label) {
    for (let child of base) {
      child.children[0].children[0].children.push({
        title: `${label}_${base.indexOf(child)}`,
        color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,
        children: [],
      })
    }
  }

  function pushUmea(base, label) {
    for (let child of base) {
      child.children[0].children.push({
        title: `${label}_${base.indexOf(child)}`,
        color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,
        children: [],
      })
    }
  }

  function pushMalmo(base, label) {
    for (let child of base) {
      // console.log(child)
      child.children.push({
        title: `${label}_${base.indexOf(child)}`,
        color: `rgba(0, 0, 0, ${clock[label][base.indexOf(child)]})`,
        children: [],
      })
    }
  }

  fs.writeFileSync('data_sunburst.json', JSON.stringify(data))
}
