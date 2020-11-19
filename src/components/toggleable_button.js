import React, { useState } from "react"
import Graph from "../components/graph"

export default function ToggleableButton(props) {
  console.log(props.station)
  if (props.isOpen) {
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
          }}
          className="green"
          onClick={props.onClick}
          stationName={props.station}
        ></button>
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
          stationName={props.station}
        ></button>
      </>
    )
  }
}
