import React, { useState } from 'react'
// import Header from "../components/header"
import Map from '../components/map'
import AboutButton from '../components/lovisas_about_button'
import AboutText from '../components/about_text'

export default function Home() {
  const [aboutText, setAboutText] = useState(true)

  function toggleAboutText() {
    setAboutText(!aboutText)
  }

  return (
    <>
      <nav>
        <AboutButton onClick={toggleAboutText} />
      </nav>
      <main>
        <section className="map-container">
          <Map />
        </section>
        <section className="graph-container"></section>
      </main>
      <section className="aboutText">
        <AboutText isOpen={aboutText} />
      </section>
    </>
  )
}
