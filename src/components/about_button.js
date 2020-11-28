import React from 'react'

export default function AboutButton(props) {
  if (props.isOpen) {
    return (
      <>
        <button
          className="about-button"
          onClick={props.onClick}
          style={{ background: '#000', color: '#F4F1E3' }}
        >
          {`  X  `}
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
