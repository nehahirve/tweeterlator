const TextCleaner = require('text-cleaner') // tool to clean up text
const Markov = require('ez-markov') // creates a markov graph
const fs = require('fs')
const sw = require('stopword') // removes common words
const data = {}
const cities = require('./seed.json')

function generateGraphForAllCities(cities) {
  for (let city of cities) {
    generateGraph(city)
  }
  fs.writeFileSync('data_vis.json', JSON.stringify(data))
}
generateGraphForAllCities(cities)

function generateGraph(city) {
  let text = fs
    .readFileSync(`TEXTDATA/${city.name}.txt`)
    .toString()
    .toLowerCase()

  // removing characters
  let characterArray = text.split('')

  const badChars = ['…', '(', ')', ',', '*', ';']
  let stripped = characterArray.map(char => {
    if (badChars.includes(char)) {
      return ''
    } else {
      return char
    }
  })

  let condensedText = TextCleaner(stripped.join('')).condense().valueOf()

  // REMOVE STOPWORDS
  let customStopWords = [
    'rt',
    ',',
    '=',
    '-',
    '--',
    "'",
    'it',
    'ghez',
    '...',
    '10',
    '–',
    'من',
    'و',
    'از',
    've',
  ]

  let swedish = sw.removeStopwords(condensedText.split(' '), sw.sv)
  let english = sw.removeStopwords(swedish, sw.en)
  let custom = sw.removeStopwords(english, customStopWords).join(' ')

  let regExp = new RegExp(/^.$/)

  let wordArray = custom.split(' ')
  let cleaned = wordArray.map(word => {
    if (regExp.test(word)) {
      return ''
    } else {
      return word
    }
  })

  let joined = cleaned.join(' ')
  fs.writeFileSync('test.txt', joined)

  let frequencyData = createDictionary(joined)
  console.log(frequencyData)

  // CREATE MARKOV CHAIN
  const chain = new Markov()

  chain.addCorpus(joined)
  const graph = chain.export()

  // FILTER OUT THE GRAPH TO ONLY INCLUDE TOP WORDS

  function createDictionaryofTopWords(threshold) {
    let topWords = {}
    for (let [key, value] of Object.entries(frequencyData)) {
      if (value.frequency > threshold) {
        // threshold for top words
        topWords[key] = value.frequency
      }
    }
    return topWords
  }

  const topWords = createDictionaryofTopWords(7)

  const newNodes = []

  for (let node of graph.nodes) {
    if (topWords.hasOwnProperty(node.label)) {
      //console.log(node.label)
      newNodes.push(node)
    }
  }

  for (let node of newNodes) {
    node.value = topWords[node.label]
  }

  graph.nodes = newNodes

  // at this point we have filtered out nodes in graph

  let newEdges = []
  let evenMoreNewEdges = []
  for (let edge of graph.edges) {
    for (let node of graph.nodes) {
      if (node.id === edge.from) {
        newEdges.push(edge)
        break
      }
    }
  }

  for (let edge of newEdges) {
    for (let node of graph.nodes) {
      if (node.id === edge.to) {
        evenMoreNewEdges.push(edge)
        break
      }
    }
  }

  graph.edges = evenMoreNewEdges

  // add to cytodata structure
  const visData = {
    nodes: [],
    edges: [],
  }

  for (let node of graph.nodes) {
    let dataObj = {
      id: node.id,
      value: node.value,
      label: node.label,
    }
    visData.nodes.push(dataObj)
  }

  let counter = 0

  for (let edge of graph.edges) {
    counter++

    let dataObj = {
      from: edge.from,
      to: edge.to,
      value: edge.weight,
      title: `edge-${counter}`,
    }
    visData.edges.push(dataObj)
  }

  data[city.name] = visData
}

function createDictionary(string) {
  const array = string.split(' ')
  const dict = {}
  array.forEach(word => {
    if (dict[word]) {
      dict[word].frequency++
    } else {
      dict[word] = { frequency: 1 }
    }
  })
  return dict
}
