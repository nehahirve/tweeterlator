import React from 'react'
import Canvas from 'react-responsive-canvas'

export default class RadialHeatmap extends React.Component {
  constructor(props) {
    super(props)
    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth * window.devicePixelRatio * 0.66
    this.canvas.height = window.innerHeight * window.devicePixelRatio
    console.log(this.canvas.height)
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw() {
    console.log('drawn')
    // Draw whatever
    const center = { x: this.canvas.width / 2, y: this.canvas.height / 2 }
    this.ctx.fillStyle = 'black'
    this.ctx.beginPath()
    this.ctx.moveTo(center.x, center.y)
    this.ctx.arc(center.x, center.y, 200, Math.PI * 1.5, 0)
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(center.x, center.y)
    this.ctx.arc(center.x, center.y, 200, 0, Math.PI * 0.5)
    this.ctx.closePath()

    this.ctx.stroke()
  }

  render() {
    return (
      <div className="heatmap">
        <Canvas canvasRef={el => (this.canvas = el)} onResize={this.draw} />
      </div>
    )
  }
}
