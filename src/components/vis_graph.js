import React from 'react'
import Graph from 'react-graph-vis'
import data from '../../static/data_vis.json'
//import 'react-vis/dist/style.css'

export default class VisGraph extends React.Component {
  constructor(props) {
    super(props)
    this.network = React.createRef()
    this.selectLabel = this.selectLabel.bind(this)
    this.addNode = this.addNode.bind(this)
    this.keepNodeFixed = this.keepNodeFixed.bind(this)
    this.state = {
      currentCity: this.props.station,
      graph: data[this.props.station.toLowerCase()],
    }
    this.events = {
      zoom: this.keepNodeFixed,
      dragging: this.keepNodeFixed,
    }
  }

  keepNodeFixed() {
    let cityPos = this.props.coords
    let coords = this.network.DOMtoCanvas(cityPos)
    let xPos = coords.x
    let yPos = coords.y
    this.network.moveNode(0, xPos, yPos)
  }

  addNode(network) {
    network.moveTo({
      scale: 0.5,
      position: { x: 0, y: 0 },
      offset: { x: 300, y: 0 },
    })
    network.fit()
    let cityPos = this.props.coords

    let coords = this.network.DOMtoCanvas(cityPos)

    const node = {
      id: 0,
      label: 'CITY ' + this.props.station,
      x: coords.x,
      y: coords.y,
      value: 0,
      fixed: true,
      physics: false,
      color: 'transparent',
    }
    const edge = {
      from: 0,
      to: data[this.props.station.toLowerCase()].nodes[3].id,
      title: 'THIS IS THE EDGE',
      value: 5,
      length: 1000,
    }
    let newData = Object.assign({}, data[this.props.station.toLowerCase()])
    newData.nodes = newData.nodes.concat(node)
    newData.edges = newData.edges.concat(edge)
    this.setState({ graph: newData })
  }

  componentDidMount() {
    console.log('mounted')
    this.setState({ currentCity: this.props.station })
    this.addNode(this.network)
  }

  componentDidUpdate(prevProps) {
    console.log('updated')
    if (prevProps.station !== this.props.station) {
      this.setState({ currentCity: this.props.station })
      this.addNode(this.network)
    }
  }

  selectLabel(values) {
    values.color = 'yellow'
  }

  render() {
    const options = {
      autoResize: true,
      width: '100%',
      height: '100%',

      clickToUse: true,
      nodes: {
        hidden: this.props.isOpen ? false : true,
        borderWidth: 0,
        borderWidthSelected: 0,
        chosen: {
          label: this.selectLabel,
        },
        color: {
          background: 'red',
          highlight: 'blue',
        },
        font: { color: 'green', size: 40, face: 'IBM Plex Mono' },
        shape: 'dot',
      },
      edges: {
        arrows: {
          to: { enabled: false },
        },
        color: {
          color: 'green',
          highlight: 'red',

          inherit: 'from',
          opacity: 1.0,
        },
      },
      layout: {
        randomSeed: 1,
      },
      physics: {
        enabled: true,
        solver: 'barnesHut',
      },
      interaction: {
        dragView: true,
        zoomView: true,
      },
    }

    if (this.props.isOpen) {
      return (
        <Graph
          graph={this.state.graph}
          options={options}
          events={this.events}
          getNetwork={network => (this.network = network)}
        />
      )
    } else {
      return (
        <Graph
          graph={this.state.graph}
          options={options}
          events={this.events}
          className="hidden"
          getNetwork={network => (this.network = network)}
        />
      )
    }
  }
}
