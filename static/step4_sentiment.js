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
    console.log(colourMappedScore)
  }
  fs.writeFileSync('sentiment.json', JSON.stringify(data))
}

function colourMap(input) {
  const outputStart = -255
  const slope = 0.51
  return outputStart + slope * (input - -500)
}
generateSentimentForAllCities(cities)
