import React from "react"
import ButtonList from "../components/button_list"
import lines from "../../static/SVG/lines.svg"

export default function Map() {
  return (
    <div className="background-map">
      <img src={lines} alt="" />
      <ButtonList
        stations={[
          { name: "Stockholm", pos: { x: 73, y: 67.5 } },
          { name: "Malmö", pos: { x: 50, y: 67.5 } },
          { name: "Göteborg", pos: { x: 50, y: 67.5 } },
          { name: "Sundsvall", pos: { x: 50, y: 67.5 } },
          { name: "Umeå", pos: { x: 50, y: 67.5 } },
        ]}
      />
    </div>
  )
}
