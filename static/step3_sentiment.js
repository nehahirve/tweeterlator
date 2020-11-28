const fs = require('fs') // removes common words
const data = {}
const sentimentSv = require('sentiment-swedish')
const Sentiment = require('sentiment')

const cities = require('./seed.json')

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
