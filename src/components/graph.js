import React from 'react'
import Cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import CytoscapeComponent from 'react-cytoscapejs'

import data from '../../static/neha.json'

Cytoscape.use(fcose)

export default class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.myCyRef = React.createRef()
  }

  componentDidMount() {
    this.myCyRef.nodes().forEach(function (node) {
      let size = node._private.data.size
      // let size = Math.random() * 50 + 10
      node.css('width', Math.pow(size, 1.5))
      node.css('height', Math.pow(size, 1.5))
    })
    this.myCyRef
      .layout({ name: 'random', animate: false, animationDuration: 1000 })
      .run()
  }

  render() {
    //const layout = { name: 'fcose', animate: true, animationDuration: 500 }

    return (
      <CytoscapeComponent
        className="cy"
        elements={data}
        stylesheet={[
          {
            selector: 'node',
            style: {
              shape: 'ellipse',
              label: 'data(label)',
              color: 'red',
              width: 'data(size)',
              height: 'data(size)',
            },
          },
          {
            selector: 'edge',
            style: {
              width: 'data(weight)',
            },
          },
        ]}
        cy={cy => {
          this.myCyRef = cy
        }}
      />
    )
  }
}
