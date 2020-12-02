import React from 'react'
import Sunburst from '@nivo/sunburst'
import testData from '../../static/test.json'

export default function ResponsiveSunburst() {
  return (
    <Sunburst
      data={testData}
      margin={{
        top: 40,
        right: 20,
        bottom: 20,
        left: 20
      }}
      height={500}
      width={500}
      identity="name"
      value="loc"
      cornerRadius={2}
      borderWidth={1}
      borderColor="white"
      colors="set2"
      colorBy="id"
      childColor="inherit"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  );
};

