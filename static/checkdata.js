var fs = require("fs")

let file = fs.readFileSync("göteborg_1.json")

let data = JSON.parse(file)

console.log(data)
