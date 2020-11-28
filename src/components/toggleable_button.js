import React, { useEffect } from 'react'

export default function ToggleableButton(props) {
  useEffect(() => {
    if (props.clickedStation === props.station) {
      // nothing
    }
  }, [])

  if (props.clickedStation === props.station) {
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
            background: '#000',
            color: '#F4F1E3',
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
