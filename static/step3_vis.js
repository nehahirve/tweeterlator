const TextCleaner = require('text-cleaner') // tool to clean up text
const MoxyTA = require('moxy-ta') // word frequency analyser
const Markov = require('ez-markov') // creates a markov graph
const fs = require('fs')
const sw = require('stopword') // removes common words
const data = {}

const cities = [
  { name: 'stockholm', lat: 59.33258, lon: 18.0649 },
  { name: 'malmö', lat: 55.60587, lon: 13.00073 },
  { name: 'umeå', lat: 63.82842, lon: 20.25972 },
  { name: 'sundsvall', lat: 62.39129, lon: 17.3063 },
  { name: 'göteborg', lat: 57.650002, lon: 12.016667 },
  { name: 'karlstad', lat: 59.3793, lon: 13.50357 },
  { name: 'kiruna', lat: 67.85572, lon: 20.22513 },
]

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
  let condensedText = TextCleaner(text).condense().valueOf()

  // REMOVE STOPWORDS
  let customStopWords = ['rt', ',', '=', '-', '--', "'"]

  let swedish = sw.removeStopwords(condensedText.split(' '), sw.sv)
  let english = sw.removeStopwords(swedish, sw.en)
  let custom = sw.removeStopwords(english, customStopWords).join(' ')
  const ta = new MoxyTA(custom)
  let frequencyData = ta.scan().wordFrequency

  // CREATE MARKOV CHAIN
  const chain = new Markov()

  chain.addCorpus(custom)
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

  const topWords = createDictionaryofTopWords(3)

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
  console.log(city)
  data[city.name] = visData
}

// fs.writeFileSync('data_vis.json', JSON.stringify(visData))
