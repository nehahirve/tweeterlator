const TextCleaner = require('text-cleaner') // tool to clean up text
const MoxyTA = require('moxy-ta') // word frequency analyser
const Markov = require('ez-markov') // creates a markov graph
const fs = require('fs')
const sw = require('stopword') // removes common words

// READ THE TEXT, TRIM AND CLEAN IT
let text = fs.readFileSync('TEXTDATA/stockholm.txt').toString().toLowerCase()

let condensedText = TextCleaner(text).condense().valueOf()

// REMOVE STOPWORDS
let customStopWords = ['rt', ',', '=', '-', '--', "'"]

let swedish = sw.removeStopwords(condensedText.split(' '), sw.sv)
let english = sw.removeStopwords(swedish, sw.en)
let custom = sw.removeStopwords(english, customStopWords).join(' ')

// GETTING WORD FREQUENCY DATA
const ta = new MoxyTA(custom)
let frequencyData = ta.scan().wordFrequency

// CREATE MARKOV CHAIN
const chain = new Markov()

chain.addCorpus(custom)
const graph = chain.export()

// FILTER OUT THE GRAPH TO ONLY INCLUDE TOP WORDS
let topWords = {}

for (let [key, value] of Object.entries(frequencyData)) {
  if (value.frequency > 3) {
    // threshold for top words
    topWords[key] = value.frequency
  }
}

const newNodes = []
for (let node of graph.nodes) {
  if (topWords.hasOwnProperty(node.label)) {
    //console.log(node.label)
    newNodes.push(node)
  }
}

for (let node of newNodes) {
  node.size = topWords[node.label]
}

graph.nodes = newNodes

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
const cytoData = []
for (let node of graph.nodes) {
  let dataObj = {
    data: {
      id: node.id,
      label: node.label,
      size: node.size,
      group: 'nodes',
    },
  }
  cytoData.push(dataObj)
}

let counter = 0
for (let edge of graph.edges) {
  counter++
  let dataObj = {
    data: {
      id: `e${counter}`,
      source: edge.from,
      target: edge.to,
      weight: edge.weight,
      group: 'edges',
    },
  }
  cytoData.push(dataObj)
}

fs.writeFileSync('data_ctyo.json', JSON.stringify(cytoData))
