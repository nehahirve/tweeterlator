import React, { useState } from "react"
import ToggleableButton from "../components/toggleable_button"

export default function ButtonList(props) {
  const [currentButton, setCurrentButton] = useState(null)

  function toggle(e) {
    let current = e.target.innerText
    setCurrentButton(current)
  }

  const stations = props.stations.map((station, index) => {
    if (currentButton === station) {
      return (
        <ToggleableButton
          key={index}
          onClick={toggle}
          station={station}
          isOpen={true}
        />
      )
    } else {
      return (
        <ToggleableButton
          key={index}
          onClick={toggle}
          station={station}
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
