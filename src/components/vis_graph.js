import React from 'react'
import Graph from 'react-graph-vis'
import data from '../../static/data_vis.json'
//import 'react-vis/dist/style.css'

export default class VisGraph extends React.Component {
  constructor(props) {
    super(props)
    this.network = React.createRef()
    this.selectLabel = this.selectLabel.bind(this)
    this.initNetwork = this.initNetwork.bind(this)
    this.options = {
      autoResize: true,
      width: '100%',
      height: '100%',
      nodes: {
        borderWidth: 0,
        borderWidthSelected: 0,
        chosen: {
          label: this.selectLabel,
        },
        color: { color: 'red', highlight: 'blue' },
        font: { color: 'green', size: 40, face: 'IBM Plex Mono' },
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
      layout: {
        randomSeed: 12979,
        improvedLayout: true,
        clusterThreshold: 150,
      },
      physics: {
        enabled: true,
        solver: 'repulsion',
        wind: {
          x: 1000000,
        },
      },
    }
    this.state = {
      currentCity: this.props.station,
      graph: data[this.props.station.toLowerCase()],
    }
  }

  initNetwork(network) {
    console.log('changed')
    network.moveTo({
      scale: 0.5,
      position: { x: 0, y: 0 },
      offset: { x: 300, y: 0 },
    })
  }

  componentDidMount() {
    this.setState({ currentCity: this.props.station })
    this.setState({ graph: data[this.props.station.toLowerCase()] })
    this.initNetwork(this.network)
  }

  componentDidUpdate() {
    if (this.props.station !== this.state.currentCity) {
      this.setState({ currentCity: this.props.station })
      this.setState({ graph: data[this.props.station.toLowerCase()] })
      this.initNetwork(this.network)
    }
  }

  selectLabel(values) {
    values.color = 'yellow'
  }

  render() {
    const node = {
      id: 0,
      label: 'THIS IS STOCKHOLM',
      x: 0,
      y: 0,
      value: 100000,
      fixed: true,
      physics: false,
    }
    const edge = {
      from: 0,
      to: this.state.graph.nodes[0].id,
      title: 'THIS IS THE EDGE',
      value: 5,
    }

    const events = {
      select: function (event) {
        var { nodes, edges } = event
      },
    }

    if (this.props.isOpen) {
      return (
        <Graph
          graph={this.state.graph}
          options={this.options}
          events={events}
          getNetwork={network => (this.network = network)}
        />
      )
    } else {
      return null
    }
  }
}
