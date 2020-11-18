import React, { useState } from "react"
import ToggleableButton from "../components/toggleable_button"

export default function ButtonList(props) {
  const [currentButton, setCurrentButton] = useState(null)
  function toggle(e) {
    let current = e.target.innerText
    setCurrentButton(current)
    console.log(currentButton)
  }

  const stations = props.stations.map(station => {
    if (currentButton === station) {
      return (
        <ToggleableButton onClick={toggle} station={station} isOpen={true} />
      )
    } else {
      return (
        <ToggleableButton onClick={toggle} station={station} isOpen={false} />
      )
    }
  })

  return (
    <>
      <ul className="station-list">{stations}</ul>
    </>
  )
}
