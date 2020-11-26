import React, { useState } from 'react'
import ToggleableButton from '../components/toggleable_button'

export default function ButtonList(props) {
  const [currentButton, setCurrentButton] = useState(null)
  const [stationsOpen, setStationsOpen] = useState([...props.stations])

  function toggle(e) {
    //console.log(e.target.getAttribute('stationname'))
    let current = e.target.getAttribute('stationname')
    setCurrentButton(current)

    setStationsOpen(
      stationsOpen.map(station => {
        if (currentButton) {
          if (station.name === currentButton) {
            console.log(station.name)
            return Object.assign({}, station, { isOpen: true })
          } else {
            return Object.assign({}, station, { isOpen: false })
          }
        }
      })
    )
  }

  const stations = props.stations.map((station, index) => {
    if (station.isOpen) {
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
