import React from 'react'

export default class Info extends React.Component {
  render() {
    return (
      <>
        <button className="infoBtn" onClick={props.onClick}>
          About
        </button>
      </>
    )
  }
}
