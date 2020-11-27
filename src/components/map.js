import React from 'react'
import ButtonList from '../components/button_list'
import lines from '../../static/SVG/lines.svg'

export default function Map(props) {
  return (
    <div className="background-map">
      <img src={lines} alt="" />
      <ButtonList
        stationList={props.stationList}
        onClick={props.onClick}
        clickedStation={props.clickedStation}
      />
    </div>
  )
}
