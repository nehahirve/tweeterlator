import React from 'react'
import Graph from 'react-graph-vis'
import data from '../../static/testdata.json'
//import 'react-vis/dist/style.css'

export default function VisGraph(props) {
  const graph = data

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: 'blue',
    },
    height: '90%',
  }

  const events = {
    select: function (event) {
      var { nodes, edges } = event
    },
  }

  if (props.isOpen) {
    return (
      <div className="test">{props.station}</div>
      // <Graph
      //   graph={graph}
      //   options={options}
      //   events={events}
      //   getNetwork={network => {
      //     //  if you want access to vis.js network api you can set the state in a parent component using this property
      //   }}
      // />
    )
  } else {
    return null
  }
}
