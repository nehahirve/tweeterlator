import React from "react"
// import Header from "../components/header"
import Map from "../components/map"
import BubbleChart from "../components/bubbleChart"
import Info from "../components/infoText"

export default function Home() {
  
  return (
    <>
      <Info />
      <div className="page-wrapper">
        
        <main>
          <Map />
        </main>
        {/* <Header /> */}
        <div className="chart">
          <BubbleChart />
        </div>
      </div>
    </>
  )
}
