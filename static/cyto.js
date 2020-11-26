const TextCleaner = require('text-cleaner')
const MoxyTA = require('moxy-ta')
const Markov = require('ez-markov')
const fs = require('fs')
const sw = require('stopword')

let text = fs.readFileSync('TEXTDATA/stockholm.txt').toString()

text = text.toLowerCase().trim()
let result = TextCleaner(text).condense().valueOf()

let swedish = sw.removeStopwords(result.split(' '), sw.sv).join(' ')
let english = sw.removeStopwords(swedish.split(' '), sw.en).join(' ')
console.log(text.length, english.length)

const ta = new MoxyTA(english)
result = ta.scan()

let frequencyData = result.wordFrequency

const chain = new Markov()
chain.addCorpus(text)
const graph = chain.export()

let topWords = {}

for (let [key, value] of Object.entries(frequencyData)) {
  if (value.frequency > 5) {
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

fs.writeFileSync('neha.json', JSON.stringify(cytoData))
