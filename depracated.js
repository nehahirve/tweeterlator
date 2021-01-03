const fs = require('fs')

const cities = require('./seed.json')

function writePagesofTweetContenttoTextFile(pages) {
  for (let city of cities) {
    let text = ''
    for (let i = 0; i < pages; i++) {
      let file = fs.readFileSync(`JSONDATA/${city.name}_${i + 1}.json`)
      let data = JSON.parse(file)
      let tweets = data.statuses
      for (let tweet of tweets) {
        text += `${tweet.full_text}
        `
      }
    }
    fs.writeFileSync(`TEXTDATA/${city.name}.txt`, text)
  }
}

writePagesofTweetContenttoTextFile(10)
