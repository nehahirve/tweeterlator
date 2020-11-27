import React from 'react'

export default function ToggleableButton(props) {
  console.log(props)
  if (props.currentStation === props.station) {
    
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
          }}
          className={`active ${props.station}`}
          onClick={props.onClick}
          stationName={props.station}
        >
          {props.station}
        </button>
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
          className={props.station}
          onClick={props.onClick}
          stationName={props.station}
        >
          {props.station}
        </button>
      </>
    )
  }
}
