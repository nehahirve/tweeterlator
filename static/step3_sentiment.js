const fs = require('fs') // removes common words
const data = {}
const sentimentSv = require('sentiment-swedish')
const Sentiment = require('sentiment')

const cities = [
  { name: 'stockholm', lat: 59.33258, lon: 18.0649 },
  { name: 'malmö', lat: 55.60587, lon: 13.00073 },
  { name: 'umeå', lat: 63.82842, lon: 20.25972 },
  { name: 'sundsvall', lat: 62.39129, lon: 17.3063 },
  { name: 'göteborg', lat: 57.650002, lon: 12.016667 },
  { name: 'karlstad', lat: 59.3793, lon: 13.50357 },
  { name: 'kiruna', lat: 67.85572, lon: 20.22513 },
]

function generateSentimentForAllCities(cities) {
  let data = {}
  for (let city of cities) {
    let textString = fs
      .readFileSync(`TEXTDATA/${city.name}.txt`)
      .toString()
      .toLowerCase()

    let sentimentScoreSv = sentimentSv(textString).comparative
    let sentimentScoreEn = new Sentiment().analyze(textString).comparative
    let total = sentimentScoreEn + sentimentScoreSv
    let score = Math.round(total * 10000)
    if (score > 500) score = 500
    if (score < -500) score = -500
    data[city.name] = score
  }
  fs.writeFileSync('sentiment.json', JSON.stringify(data))
}

generateSentimentForAllCities(cities)
