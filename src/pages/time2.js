import React, { useState, useEffect } from 'react'
// import Header from "../components/header"
import Map from '../components/map'
import AboutButton from '../components/about_button'
import AboutText from '../components/about_text'
import ResponsiveSunburst from '../components/sunburst'

export default function Time() {
  const [aboutText, setAboutText] = useState(false)
  const [graphVisible, setGraphVisible] = useState(true)
  const [currentStation, setCurrentStation] = useState('Stockholm')
  const [targetX, setTargetX] = useState(0)
  const [targetY, setTargetY] = useState(0)
  const [hasInitialised, setHasInitialised] = useState(false)

  const stationList = [
    { name: 'Stockholm', pos: { x: 73, y: 67.5 } },
    { name: 'Karlstad', pos: { x: 11, y: 67 } },
    { name: 'Malmö', pos: { x: 18, y: 94 } },
    { name: 'Göteborg', pos: { x: -7, y: 79.5 } },
    { name: 'Sundsvall', pos: { x: 73, y: 44.5 } },
    { name: 'Umeå', pos: { x: 85, y: 35 } },
    { name: 'Kiruna', pos: { x: 81, y: 8 } },
  ]

  function toggleAboutText() {
    console.log(graphVisible)
    setAboutText(!aboutText)
    setGraphVisible(!graphVisible)
  }

  function init(coordinates, initialStation) {
    setTargetX(coordinates.x)
    setTargetY(coordinates.y)
    setHasInitialised(true)
  }

  function updateCurrentStation(e) {
    let station = e.target.innerText
    var rect = e.target.getBoundingClientRect()
    setTargetX((rect.left + rect.right) / 2)
    setTargetY((rect.top + rect.bottom) / 2)
    setCurrentStation(station)
    setAboutText(false)
    setGraphVisible(true)
  }

  return (
    <>
      <nav>
        <AboutButton onClick={toggleAboutText} isOpen={aboutText} />
      </nav>
      <main>
        <section className="map-container">
          <Map
            onInit={init}
            stationList={stationList}
            onClick={updateCurrentStation}
            clickedStation={currentStation}
          />
        </section>
        <section className="graph-container">
          <ResponsiveSunburst />
        </section>
      </main>
      <section className="aboutText">
        <AboutText isOpen={aboutText} />
      </section>
    </>
  )
}
