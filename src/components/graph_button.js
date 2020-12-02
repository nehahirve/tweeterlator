import React from 'react'

export default function GraphButton(props) {
  if (props.isOpen) {
    return (
      <>
        <button className="graph-button" onClick={props.onClick}>
          Toggle
        </button>
      </>
    )
  } else return null
}
