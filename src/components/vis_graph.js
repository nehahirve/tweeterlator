import React from 'react'
import Graph from 'react-vis-network-graph'
import data from '../../static/data_vis.json'
import sentimentData from '../../static/data_sentiment.json'
//import 'react-vis/dist/style.css'
import colors from '../../static/colours.json'

function rgbStringToRgbObject(c1) {
  c1 = c1.slice(4, -1).split(',')
  return {
    r: +c1[0],
    g: +c1[1],
    b: +c1[2],
  }
}

function createGradient(c1, c2) {
  c1 = rgbStringToRgbObject(c1)
  c2 = rgbStringToRgbObject(c2)
  let gradient = []
  for (let i = 0; i < 255; i++) {
    let r = c1.r + (i * (c2.r - c1.r)) / 255
    let g = c1.g + (i * (c2.g - c1.g)) / 255
    let b = c1.b + (i * (c2.b - c1.b)) / 255
    gradient.push({ r, g, b })
  }
  return gradient.map(color => {
    return `rgb(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(
      color.b
    )})`
  })
}

const gradient = createGradient(colors.color1, colors.color2)

export default class VisGraph extends React.Component {
  constructor(props) {
    super(props)
    this.network = React.createRef()
    this.selectLabel = this.selectLabel.bind(this)
    this.addNode = this.addNode.bind(this)
    this.keepNodeFixed = this.keepNodeFixed.bind(this)
    this.scaleNode = this.scaleNode.bind(this)
    this.state = {
      currentCity: this.props.station,
      graph: data[this.props.station.toLowerCase()],
      hasInitialised: props.hasInitialised,
    }
    this.events = {
      zoom: this.keepNodeFixed,
      dragging: this.keepNodeFixed,
    }
  }

  scaleNode(min, max, total, value) {
    if (max === min) {
      return 0.5
    } else {
      var scale = 1 / (max - min)
      return Math.max(0, (value - min) * scale)
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
      color: colors.black,
    }

    let newData = Object.assign({}, data[this.props.station.toLowerCase()])
    newData.nodes = newData.nodes.concat(node)
    newData.edges = newData.edges.concat(edge)

    this.setState({ graph: newData })
  }

  componentDidMount() {
    this.setState({ currentCity: this.props.station })
    this.addNode(this.network)
    this.forceUpdate()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.station !== this.props.station ||
      prevProps.hasInitialised !== this.props.hasInitialised
    ) {
      this.setState({ currentCity: this.props.station })
      this.addNode(this.network)
    }
  }

  selectLabel(values) {
    values.size = 80
  }

  render() {
    const sentiment = sentimentData[this.props.station.toLowerCase()]

    const moodColor = gradient[sentiment - 1]

    const hide = this.props.graph || !this.props.isOpen ? true : false
    const options = {
      autoResize: true,
      width: '100%',
      height: '100%',

      clickToUse: true,
      nodes: {
        hidden: hide,
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
        scaling: {
          min: 1,
          max: 60,

          // customScalingFunction: function (min, max, total, value) {
          //   let scale = 1 / (max - min)
          //   return Math.pow(value, 2) * scale
          // },
        },
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
        randomSeed: 1314231,
      },
      physics: {
        enabled: true,
        solver: 'repulsion',
        repulsion: {
          centralGravity: 0.01,
          springLength: 300,
          springConstant: 0.001,
          nodeDistance: 100,
          damping: 0.05,
        },
      },
      interaction: {
        dragView: true,
        zoomView: true,
      },
    }

    const index = hide ? 3100 : 3999

    return (
      <Graph
        graph={this.state.graph}
        options={options}
        events={this.events}
        getNetwork={network => (this.network = network)}
      />
    )
  }
}
