import React from "react"
import data from "../../static/data_sunburst.json"
import colors from "../../static/colours.json"
import clock from "../../static/clock.json"
import { Hint, Sunburst } from "react-vis"

const rgb = { r: 239, g: 77, b: 151 }

function updateData() {
  const totalLeaves = 24
  const leaves = []
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = data.children[i]
    leaves.push(leaf)
    leaves.push(leaf)
  }
  return {
    title: "",
    color: 1,
    children: leaves,
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function colourData(city, newData) {
  const totalLeaves = 24
  const leaves = []
  if (city === "stockholm") {
    for (let child of newData.children) {
      const o = clock["stockholm"][newData.children.indexOf(child)]
      child.color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "malmö") {
    for (let child of newData.children) {
      const o = clock["malmö"][newData.children.indexOf(child)]
      child.children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "umeå") {
    for (let child of newData.children) {
      const o = clock["umeå"][newData.children.indexOf(child)]
      child.children[0].children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "sundsvall") {
    for (let child of newData.children) {
      const o = clock["sundsvall"][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "göteborg") {
    for (let child of newData.children) {
      const o = clock["göteborg"][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "karlstad") {
    for (let child of newData.children) {
      const o = clock["karlstad"][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  } else if (city === "kiruna") {
    for (let child of newData.children) {
      const o = clock["kiruna"][newData.children.indexOf(child)]
      child.children[0].children[0].children[0].children[0].children[0].children[0].color = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${o})`
    }
  }
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = newData.children[i]

    // console.log(leaf.children)
    leaves.push(leaf)
  }
  return {
    title: "",
    color: 1,
    children: leaves,
  }
}

const tipStyle = {
  display: "flex",
  color: "#fff",
  background: "#000",
  alignItems: "center",
  padding: "5px",
}
const boxStyle = { height: "10px", width: "10px" }

function buildValue(hoveredCell) {
  const { radius0, angle, angle0 } = hoveredCell
  const truedAngle = (angle + angle0) / 2
  return {
    x: radius0 * Math.sin(truedAngle),
    y: radius0 * Math.cos(truedAngle),
  }
}

export default class SunburstGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: updateData(),
      current: this.props.station,
      hoveredCell: false,
      tooltip: "",
      mouse: { x: 0, y: 0 },
    }
    this.updateKey = this.updateKey.bind(this)
  }

  updateKey() {
    this.props.update()
  }

  componentDidMount() {
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
    const { hoveredCell } = this.state
    return (
      <Sunburst
        hideRootNode
        data={this.state.data}
        height={600}
        width={600}
        animation={{ damping: 15, stiffness: 300 }}
        style={{
          stroke: colors.white,
          strokeOpacity: 1,
          strokeWidth: "3",
        }}
        // onValueMouseOver={(v, e) => {
        //   this.setState({ mouse: { x: e.event.clientX, y: e.event.clientY } })
        //   this.setState({ tooltip: v.title })
        //   this.setState({ hoveredCell: v })

        //   console.log(e.event.clientX)
        // }}
        // onValueMouseOut={v => this.setState({ hoveredCell: false })}
      >
        {hoveredCell ? (
          <Hint value={buildValue(hoveredCell)}>
            <div style={tipStyle}>
              <div style={{ ...boxStyle, background: "red" }} />
              {"hello"}
            </div>
          </Hint>
        ) : null}
      </Sunburst>
    )
  }
}
// export default function SunburstGraph() {}
