var https = require("follow-redirects").https
var fs = require("fs")

const radius = 5

const cities = [
  { name: "stockholm", lat: 59.33258, lon: 18.0649 },
  { name: "malmö", lat: 55.60587, lon: 13.00073 },
  { name: "umeå", let: 63.82842, lon: 20.25972 },
  { name: "sundsvall", lat: 62.39129, lon: 17.3063 },
  { name: "göteborg", lat: 57.650002, lon: 12.016667 },
]

let options, maxId

function getData() {
  let text
  for (let city of cities) {
    for (let i = 0; i < 5; i++) {
      maxId = 0

      options = {
        method: "GET",
        hostname: "api.twitter.com",
        path: `/1.1/search/tweets.json?q=geocode%3A${city.lat}%2C${city.lon}%2C${radius}km&count=100&max_id=${maxId}`,
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAL95JwEAAAAA%2BHXhTUoCMMZevQt2kq0qMTwuDkQ%3D32LFyGWm49UV3oz3R3xNld4IqDTe1ua4ZkRcAzFerCQV2wgYMe",
          Cookie:
            'personalization_id="v1_LT8r3+BhOs+k4ZsQDiqyEw=="; guest_id=v1%3A160570801728849585',
        },
        maxRedirects: 20,
      }

      let req = https.request(options, function (res) {
        let chunks = []

        res.on("data", function (chunk) {
          chunks.push(chunk)
        })

        res.on("end", function (chunk) {
          let body = Buffer.concat(chunks)
          let workingData = JSON.parse(body.toString())
          let maxIdString = workingData.search_metadata.next_results
          if (maxIdString) {
            nextMaxId = maxIdString.match(/\d+/)
            maxId = nextMaxId[0]
            console.log(maxId)
          }
          //text = text + body.toString()
          //console.log(text)
          fs.writeFileSync(
            `${city.name}_${i + 1}.json`,
            JSON.stringify(body.toString())
          )
        })

        res.on("error", function (error) {
          console.error(error)
        })
      })

      req.end()
    }
  }
}

getData()
