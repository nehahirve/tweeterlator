const fs = require('fs')

const cities = require('./seed.json')

const database = JSON.parse(fs.readFileSync('database.json')).cities

function writeRecentTweetstoTextFile(number) {
  for (let city of cities) {
    let collection = database[city.name]
    sorted = Object.keys(collection).sort((a, b) => b - a)
    // console.log(sorted)
    let text = ''
    for (let i = 0; i < number; i++) {
      if (collection[sorted[i]]) {
        text += `${collection[sorted[i]].text}
      `
      }
    }
    fs.writeFileSync(`TEXTDATA/${city.name}.txt`, text)
  }
}

writeRecentTweetstoTextFile(1000)
