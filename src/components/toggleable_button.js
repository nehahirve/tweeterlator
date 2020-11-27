import React from 'react'

export default function ToggleableButton(props) {
  if (props.clickedStation === props.station) {
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
            outline: '2px solid red',
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
