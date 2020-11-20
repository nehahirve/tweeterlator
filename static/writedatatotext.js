const fs = require("fs")
// for each city
// create a empty string
// for each file
//parse the JSON
//access the tweet
//concatenate the tweet to the empty string
//add a new line

//write the final text string to a file with city name

const cities = [
  { name: "stockholm", lat: 59.33258, lon: 18.0649 },
  { name: "malmö", lat: 55.60587, lon: 13.00073 },
  { name: "umeå", lat: 63.82842, lon: 20.25972 },
  { name: "sundsvall", lat: 62.39129, lon: 17.3063 },
  { name: "göteborg", lat: 57.650002, lon: 12.016667 },
]

for (let city of cities) {
  let text = ""
  for (let i = 0; i < 5; i++) {
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
