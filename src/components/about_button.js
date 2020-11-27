import React from 'react'

export default function AboutButton(props) {
  if (props.isOpen) {
    return (
      <>
        <button className="about-button" onClick={props.onClick}>
          x
        </button>
      </>
    )
  } else {
    return (
      <>
        <button className="about-button" onClick={props.onClick}>
          About
        </button>
      </>
    )
  }
}
