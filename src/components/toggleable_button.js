import React, { useState } from "react"
import Graph from "../components/graph"

export default function ToggleableButton(props) {
  if (props.isOpen) {
    return (
      <>
        <button
          style={{
            left: `${props.station.pos.x}%`,
            top: `${props.station.pos.y}%`,
          }}
          className="green"
          onClick={props.onClick}
          stationName={props.station.name}
        ></button>
      </>
    )
  } else {
    return (
      <>
        <button
          style={{
            left: `${props.station.pos.x}%`,
            top: `${props.station.pos.y}%`,
          }}
          onClick={props.onClick}
          stationName={props.station.name}
        ></button>
      </>
    )
  }
}
