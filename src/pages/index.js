import React, { useState, useEffect } from "react"
// import Header from "../components/header"
import Map from "../components/map"
import AboutButton from "../components/about_button"
import AboutText from "../components/about_text"
import VisGraph from "../components/vis_graph"
import SentimentGradient from "../components/sentiment_gradient"
import ToggleableGraph from "../components/toggleable_graph"
import GraphButton from "../components/graph_button"
import { Helmet } from "react-helmet"

export default function Home() {
  const [aboutText, setAboutText] = useState(false)
  const [graphVisible, setGraphVisible] = useState(true)
  const [currentStation, setCurrentStation] = useState("Stockholm")
  const [targetX, setTargetX] = useState(0)
  const [targetY, setTargetY] = useState(0)
  const [hasInitialised, setHasInitialised] = useState(false)
  const [graph, setGraph] = useState(false)
  const [id, setId] = useState("1")

  function update() {
    console.log("updated")
    setId(Math.random().toString())
  }

  const stationList = [
    { name: "Stockholm", pos: { x: 73, y: 67.5 } },
    { name: "Karlstad", pos: { x: 11, y: 67 } },
    { name: "Malmö", pos: { x: 18, y: 94 } },
    { name: "Göteborg", pos: { x: -7, y: 79.5 } },
    { name: "Sundsvall", pos: { x: 73, y: 44.5 } },
    { name: "Umeå", pos: { x: 85, y: 35 } },
    { name: "Kiruna", pos: { x: 81, y: 8 } },
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
    update()
    let station = e.target.innerText
    var rect = e.target.getBoundingClientRect()
    setTargetX((rect.left + rect.right) / 2)
    setTargetY((rect.top + rect.bottom) / 2)
    setCurrentStation(station)
    setAboutText(false)
    setGraphVisible(true)
  }

  function toggleGraph() {
    setGraph(!graph)
    console.log(graph)
  }

  return (
    <>
      <Helmet>
        <title>TweeterLator</title>
      </Helmet>
      <nav>
        <GraphButton onClick={toggleGraph} isOpen={!aboutText} />
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
        <section
          className="graph-container vis-container"
          style={{ zIndex: graph ? 3100 : 3999 }}
        >
          <VisGraph
            station={currentStation}
            coords={{ x: targetX, y: targetY }}
            isOpen={graphVisible}
            hasInitialised={hasInitialised}
            graph={graph}
          />
        </section>
        <section className="graph-container sunburst-container">
          <ToggleableGraph
            station={currentStation}
            visible={graph}
            isOpen={graphVisible}
            update={update}
            key={id}
          />
          <SentimentGradient isOpen={graphVisible} graph={graph} />
        </section>
      </main>
      <section className="aboutText">
        <AboutText isOpen={aboutText} />
      </section>
    </>
  )
}
