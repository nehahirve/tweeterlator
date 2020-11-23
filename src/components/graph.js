import React from "react"
import Cytoscape from "cytoscape"
import fcose from "cytoscape-fcose"
import CytoscapeComponent from "react-cytoscapejs"

import data from "../../static/data.json"

Cytoscape.use(fcose)

export default class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.ready = this.ready.bind(this)
  }

  ready() {
    console.log("hello")
  }

  render() {
    const layout = { name: "random" }

    return (
      <CytoscapeComponent
        className="cy"
        elements={data}
        layout={layout}
        stylesheet={[
          {
            selector: "node",
            style: {
              shape: "ellipse",
            },
          },
          {
            selector: "edge",
            style: {
              width: 1,
            },
          },
        ]}
        cy={cy => {
          this.cy = cy
        }}
        onClick={() => this.ready()}
      />
    )
  }
}
