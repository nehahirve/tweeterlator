import React from 'react'

export default function AboutButton(props) {
  return (
    <>
      <button className="about-button" onClick={props.onClick}>
        About
      </button>
    </>
  )
}
