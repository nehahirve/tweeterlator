import React from 'react'
import Graph from 'react-graph-vis'
import data from '../../static/data_vis.json'
import sentimentData from '../../static/data_sentiment.json'
//import 'react-vis/dist/style.css'

const colors = {
  color1: '#57CEE4',
  color2: '#EF4D97',
  color3: '#A8D698',
  black: '#000',
  white: '#F4F1E3',
}

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
      scale: 0.4,
      position: { x: 0, y: 0 },
      offset: { x: 300, y: 0 },
    })
    // network.fit()
    let cityPos = this.props.coords

    let coords = this.network.DOMtoCanvas(cityPos)

    const node = {
      id: 0,
      label: '',
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
      title: this.props.station,
      value: 10,
      length: 1000,
    }

    let newData = Object.assign({}, data[this.props.station.toLowerCase()])
    newData.nodes = newData.nodes.concat(node)
    newData.edges = newData.edges.concat(edge)

    this.setState({ graph: newData })
  }

  componentDidMount() {
    this.setState({ currentCity: this.props.station })
    this.addNode(this.network)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.station !== this.props.station) {
      this.setState({ currentCity: this.props.station })
      this.addNode(this.network)
    }
  }

  selectLabel(values) {
    values.color = colors.black
  }

  render() {
    const sentiment = sentimentData[this.props.station.toLowerCase()]

    const moodColor = sentiment > 0 ? colors.color1 : colors.color2 + 'aa'

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
          background: moodColor,
          highlight: colors.black,
          border: colors.black,
        },
        font: { color: colors.black, size: 40, face: 'IBM Plex Mono' },
        shape: 'dot',
      },
      edges: {
        arrows: {
          to: { enabled: false },
        },
        color: {
          color: moodColor,
          highlight: colors.black,

          inherit: 'from',
          opacity: 1.0,
        },
      },
      layout: {
        randomSeed: 13141231,
      },
      physics: {
        enabled: true,
        solver: 'repulsion',
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
