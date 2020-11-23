import React, { useState } from 'react'
import ToggleableButton from '../components/toggleable_button'

export default function ButtonList(props) {
  const stations = props.stations.map((station, index) => {
    if (props.stations.isOpen) {
      return (
        <ToggleableButton
          key={index}
          onClick={props.onClick}
          station={station.name}
          coordinates={station.pos}
          isOpen={true}
        />
      )
    } else {
      return (
        <ToggleableButton
          key={index}
          onClick={props.onClick}
          station={station.name}
          coordinates={station.pos}
          isOpen={false}
        />
      )
    }
  })

  return (
    <>
      <ul className="station-list">{stations}</ul>
    </>
  )
}
