import React from 'react'
import data from '../../static/data_sunburst.json'
import colors from '../../static/colours.json'
import clock from '../../static/clock.json'
import { Sunburst } from 'react-vis'

function updateData() {
  const totalLeaves = 24
  const leaves = []
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = data.children[i]
    leaves.push(leaf)
    leaves.push(leaf)
  }
  return {
    title: '',
    color: 1,
    children: leaves,
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function colourData(city, newData) {
  console.log(data)
  const totalLeaves = 24
  const leaves = []
  if (city === 'stockholm') {
    for (let child of newData.children) {
      console.log(child)
      const o = clock['stockholm'][newData.children.indexOf(child)]
      child.color = `rgba(87, 206, 228, ${o / 100})`
    }
  } else if (city === 'malmö') {
    for (let child of newData.children) {
      const o = clock['malmö'][newData.children.indexOf(child)]
      child.children[0].color = `rgba(87, 206, 228, ${o / 100})`
    }
  } else if (city === 'umeå') {
    for (let child of newData.children) {
      console.log(child.children[0].children[0].color)
      const o = clock['umeå'][newData.children.indexOf(child)]
      child.children[0].children[0].color = `rgba(87, 206, 228, ${o / 100})`
    }
  } else if (city === 'sundsvall') {
    for (let child of newData.children) {
      console.log(child.children[0].children[0].children[0].color)
      const o = clock['sundsvall'][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].color = `rgba(87, 206, 228, ${
        o / 100
      })`
    }
  } else if (city === 'göteborg') {
    for (let child of newData.children) {
      console.log(child.children[0].children[0].children[0].children[0].color)
      const o = clock['göteborg'][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].color = `rgba(87, 206, 228, ${
        o / 100
      })`
    }
  } else if (city === 'karlstad') {
    for (let child of newData.children) {
      console.log(
        child.children[0].children[0].children[0].children[0].children[0].color
      )
      const o = clock['karlstad'][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].children[0].color = `rgba(87, 206, 228, ${
        o / 100
      })`
    }
  } else if (city === 'kiruna') {
    for (let child of newData.children) {
      console.log(
        child.children[0].children[0].children[0].children[0].children[0]
          .children[0].color
      )
      const o = clock['kiruna'][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].children[0].children[0].color = `rgba(87, 206, 228, ${
        o / 100
      })`
    }
  }
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = newData.children[i]

    // console.log(leaf.children)
    leaves.push(leaf)
  }
  return {
    title: '',
    color: 1,
    children: leaves,
  }
}

export default class SunburstGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: updateData(),
      current: this.props.station,
    }
    this.updateKey = this.updateKey.bind(this)
    // this.colourData = this.colourData.bind(this)
  }

  updateKey() {
    this.props.update()
  }

  componentDidMount() {
    console.log('mounted')
    // this.setState({ data: data })
    console.log(this.props.station.toLowerCase())
    // colourData(this.props.station.toLowerCase())

    let newData = clone(data)
    this.setState({
      data: colourData(this.props.station.toLowerCase(), newData),
    })
    // this.setState({ data: colourData('stockholm') })
  }

  componentDidUpdate(prev, prevState, current, currentState) {
    if (prev.station !== this.props.station) {
      this.setState({ current: this.props.station })
      this.updateKey()
    }
  }

  render() {
    const { clicked, finalValue, pathValue } = this.state
    return (
      <Sunburst
        hideRootNode
        // colorType="literal"
        data={this.state.data}
        height={500}
        width={500}
        animation={{ damping: 20, stiffness: 300 }}
        style={{
          stroke: 'black',
          strokeOpacity: 1,
          strokeWidth: '2',
        }}
      />
    )
  }
}
// export default function SunburstGraph() {}
