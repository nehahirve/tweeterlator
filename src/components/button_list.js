import React, { useState } from "react"
import ToggleableButton from "../components/toggleable_button"

export default function ButtonList(props) {
  const [currentButton, setCurrentButton] = useState(null)

  function toggle(e) {
    console.log(e.target.getAttribute("stationname"))
    let current = e.target.getAttribute("stationname")
    setCurrentButton(current)
  }

  const stations = props.stations.map((station, index) => {
    if (currentButton === station.name) {
      return (
        <ToggleableButton
          key={index}
          onClick={toggle}
          station={station.name}
          coordinates={station.pos}
          isOpen={true}
        />
      )
    } else {
      return (
        <ToggleableButton
          key={index}
          onClick={toggle}
          station={station}
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
