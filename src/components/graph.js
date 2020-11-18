import React from "react"
import { ResponsiveNetwork } from "@nivo/network"

export default function Graph(props) {
  console.log(props.data)
  const data = { ...props.data.nodes }
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveNetwork
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={6}
        iterations={60}
        nodeColor={function (e) {
          return e.color
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkThickness={function (e) {
          return 2 * (2 - e.source.depth)
        }}
        motionStiffness={160}
        motionDamping={12}
      />
    </div>
  )
}
