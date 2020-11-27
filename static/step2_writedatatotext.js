const fs = require('fs')

const cities = [
  { name: 'stockholm', lat: 59.33258, lon: 18.0649 },
  { name: 'malmö', lat: 55.60587, lon: 13.00073 },
  { name: 'umeå', lat: 63.82842, lon: 20.25972 },
  { name: 'sundsvall', lat: 62.39129, lon: 17.3063 },
  { name: 'göteborg', lat: 57.650002, lon: 12.016667 },
  { name: "karlstad", lat: 59.3793, lon: 13.50357},
  { name: "kiruna", lat: 67.85572, lon: 20.22513},
]

function writePagesofTweetContenttoTextFile (pages) {
  for (let city of cities) {
    let text = ''
    for (let i = 0; i < pages; i++) {
      let file = fs.readFileSync(`JSONDATA/${city.name}_${i + 1}.json`)
      let data = JSON.parse(file)
      let tweets = data.statuses
      for (let tweet of tweets) {
        text += `${tweet.text}
        `
      }
    }
    fs.writeFileSync(`TEXTDATA/${city.name}.txt`, text)
  }
}

writePagesofTweetContenttoTextFile(5)



