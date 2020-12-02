import React from 'react'
import { Sunburst } from '@nivo/sunburst'
import testData from '../../static/data_sunburst.json'
import colors from '../../static/colours.json'
import clock from '../../static/clock.json'

export default function SunburstGraph() {
  function computeChildColour() {
    let base = []
    console.log(clock['malmö'])

    clock['stockholm'].forEach(opacity => {
      base.push(`rgba(87, 206, 228, ${opacity / 100} )`)
      // console.log(opacity / 100)
    })

    console.log(base)
    return base
  }

  function computeBaseColour() {
    let base = []
    console.log(clock['stockholm'])

    clock['stockholm'].forEach(opacity => {
      base.push(`rgba(87, 206, 228, ${opacity / 100} )`)
      // console.log(opacity / 100)
    })

    return base
  }

  let baseColours = computeBaseColour()
  let childColours = computeChildColour()
  return (
    <Sunburst
      data={testData}
      height={500}
      width={500}
      identity="name"
      value="loc"
      cornerRadius={0}
      borderWidth={5}
      borderColor={colors.white}
      colors={baseColours}
      childColor={{ from: 'color', modifiers: [['opacity', 0.5]] }}
      // isInteractive={true}
    />
  )
}
