import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst'
import testData from '../../static/data_sunburst.json'

export default function SunburstGraph() {
  return (
    <ResponsiveSunburst
      data={testData}
      height={500}
      width={500}
      identity="name"
      value="loc"
      cornerRadius={2}
      borderWidth={1}
      borderColor="white"
      childColor={{ from: 'color', modifiers: [] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  )
}
