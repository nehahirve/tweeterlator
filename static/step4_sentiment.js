const fs = require('fs') // removes common words
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
    let total = (sentimentScoreEn + sentimentScoreSv) * 10000
    if (total > 500) total = 500
    if (total < -500) total = -500
    let colourMappedScore = Math.round(colourMap(total))
    data[city.name] = colourMappedScore
    console.log(city.name, colourMappedScore)
  }
  fs.writeFileSync('data_sentiment.json', JSON.stringify(data))
}

function colourMap(input) {
  const outputStart = 1
  const outputEnd = 255
  const inputStart = -500
  const inputEnd = 500
  const slope = (outputEnd - outputStart) / (inputEnd - inputStart)
  return outputStart + slope * (input - inputStart)
}

generateSentimentForAllCities(cities)
