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

export default class SunburstGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: updateData(),
      current: this.props.station,
    }
  }

  componentDidMount() {
    this.setState({ data: data })
    console.log(this.props)
  }

  componentDidUpdate(prev, prevState, current, currentState) {
    if (prev.station !== this.props.station) {
      this.setState({ current: this.props.station })
      console.log(this.props)
      this.setState({ data: data })
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
