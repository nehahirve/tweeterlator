import React, { useState } from 'react'
import Graph from '../components/graph'

export default function ToggleableButton(props) {
  if (props.isOpen) {
    return (
      <>
        <Graph />
      </>
    )
  } else {
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
          }}
          onClick={props.onClick}
          stationname={props.station}
        ></button>
      </>
    )
  }
}
