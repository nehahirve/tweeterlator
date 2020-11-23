import React, { useState } from 'react'
import ButtonList from '../components/button_list'
import lines from '../../static/SVG/lines.svg'

export default function Map() {
  const [currentButton, setCurrentButton] = useState(null)

  function toggle(e) {
    console.log(e.target.getAttribute('stationname'))
    let current = e.target.getAttribute('stationname')
    setCurrentButton(current)
  }

  const stations = [
    { name: 'Stockholm', pos: { x: 73, y: 67.5 } },
    { name: 'Malmö', pos: { x: 18, y: 94 } },
    { name: 'Göteborg', pos: { x: 7.5, y: 79.5 } },
    { name: 'Sundsvall', pos: { x: 73, y: 44.5 } },
    { name: 'Umeå', pos: { x: 85, y: 35 } },
  ]

  for (let station of stations) {
    if (currentButton === station.name) {
      station.isOpen = true
    } else station.isOpen = false
  }

  return (
    <div className="background-map">
      <img src={lines} alt="" />
      <ButtonList stations={stations} onClick={toggle} />
    </div>
  )
}
