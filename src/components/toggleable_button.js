import React, { useState } from 'react'
import Graph from '../components/graph'

export default function ToggleableButton(props) {
  console.log(props.station)
  if (props.isOpen) {
    return (
      <>
        <Graph stationName={props.station} />
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
