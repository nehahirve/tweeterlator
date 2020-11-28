import React from 'react'
import Graph from 'react-graph-vis'
import data from '../../static/data_vis.json'
//import 'react-vis/dist/style.css'

export default function VisGraph(props) {
  const graph = data[props.station.toLowerCase()]

  function selectLabel(values) {
    values.color = 'yellow'
  }

  const cityNode = {
    id: 0,
    label: 'THIS IS STOCKHOLM',
    x: 0,
    y: 0,
    value: 300,
    fixed: true,
    physics: false,
  }

  const cityEdge = {
    from: 0,
    to: graph.nodes[0].id,
    title: 'THIS IS THE EDGE',
    value: 5,
  }

  graph.nodes.push(cityNode)
  graph.edges.push(cityEdge)

  const options = {
    autoResize: true,
    width: '100%',
    height: '100%',
    nodes: {
      borderWidth: 0,
      borderWidthSelected: 0,
      chosen: {
        label: selectLabel,
      },
      color: { color: 'red', highlight: 'blue' },
      font: { color: 'green' },
      shape: 'dot',
    },
    edges: {
      arrows: {
        to: { enabled: false },
      },
      color: {
        color: '#848484',
        highlight: 'red',
        hover: '#848484',
        inherit: 'from',
        opacity: 1.0,
      },
    },
  }

  const events = {
    select: function (event) {
      var { nodes, edges } = event
    },
  }

  if (props.isOpen) {
    return (
      //<div className="test">{props.station}</div>
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={network => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    )
  } else {
    return null
  }
}
