import React, { useEffect, useRef } from 'react'
import colors from '../../static/colours.json'

export default function ToggleableButton(props) {
  const buttonRef = useRef()
  useEffect(e => {
    if (buttonRef.current) {
      // if (buttonRef.current.getAttribute('stationname') === 'Stockholm')
      let rect = buttonRef.current.getBoundingClientRect()
      let initialCoordinates = {
        x: (rect.left + rect.right) / 2,
        y: (rect.top + rect.bottom) / 2,
      }
      props.onInit(initialCoordinates, 'Stockholm')
    }
  }, [])

  if (props.clickedStation === props.station) {
    return (
      <>
        <button
          style={{
            left: `${props.coordinates.x}%`,
            top: `${props.coordinates.y}%`,
            background: colors.black,
            color: colors.white,
            transform: 'scale(1.3)',
          }}
          ref={buttonRef}
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
