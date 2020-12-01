const TextCleaner = require('text-cleaner') // tool to clean up text
// creates a markov graph
const fs = require('fs')
const sw = require('stopword') // removes common words
const stripchar = require('stripchar').StripChar //Character Remover

const data = {}

const cities = require('./seed.json')

function generateGraphForAllCities(cities) {
  for (let city of cities) {
    if (city.name === 'sundsvall') generateGraph(city)
  }
  //fs.writeFileSync('data_vis.json', JSON.stringify(data))
}
generateGraphForAllCities(cities)

function generateGraph(city) {
  let text = fs
    .readFileSync(`TEXTDATA/${city.name}.txt`)
    .toString()
    .toLowerCase()

  // let stripped = stripchar.RSExceptUnsAlpNum(text)
  let characterArray = text.split('')
  const badChars = ['…', '(', ')', ',', '*']
  let stripped = characterArray.map(char => {
    if (badChars.includes(char)) {
      return ''
    } else {
      return char
    }
  })

  console.log(stripped.join(''))
  // console.log(text)
  let condensedText = TextCleaner(text).condense().valueOf()

  // REMOVE STOPWORDS
  let customStopWords = [
    'rt',
    ',',
    '=',
    '-',
    '--',
    "'",
    'o',
    'it',
    'ghez',
    '...',
    '10',
    ')',
    '…',
    '–',
    // 'من',
    'a',
    'و',
    'i',
    'از',
    've',
    'm…',
    'a…',
    'the…',
  ]

  let swedish = sw.removeStopwords(condensedText.split(' '), sw.sv)
  let english = sw.removeStopwords(swedish, sw.en)
  let custom = sw.removeStopwords(english, customStopWords).join(' ')

  //let trimmed = CharacterRemover.removeOnly(custom, [')', '…', ';'])

  // FILTER OUT THE GRAPH TO ONLY INCLUDE TOP WORDS
}

// fs.writeFileSync('data_vis.json', JSON.stringify(visData))
