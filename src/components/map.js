import React from "react"
import ButtonList from "../components/button_list"
import lines from "../../static/SVG/lines.svg"

export default function Map() {
  return (
    <div className="background-map">
      <img src={lines} alt="" />
      <ButtonList stations={["Akalla", "Kista", "Husby", "Alvik"]} />
    </div>
  )
}
