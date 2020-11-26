import React, { useState } from 'react'
import ButtonList from '../components/button_list'
import lines from '../../static/SVG/lines.svg'

export default function Map() {
  return (
    <div className="background-map">
      <img src={lines} alt="" />
      <ButtonList
        stations={[

          { name: "Stockholm", pos: { x: 73, y: 67.5 } },
          { name: "Karlstad", pos: {x: 11, y: 67}},
          { name: "Malmö", pos: { x: 18, y: 94 } },
          { name: "Göteborg", pos: { x: -7, y: 79.5 } },
          { name: "Sundsvall", pos: { x: 73, y: 44.5 } },
          { name: "Umeå", pos: { x: 85, y: 35 } },
          { name: "Kiruna", pos: {x: 81, y: 8} },

        ]}
      />
    </div>
  )
}
