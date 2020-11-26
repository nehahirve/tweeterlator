import React from 'react'

export default function AboutText(props) {
  if (props.isOpen) {
    return (
      <div className="about-text-wrapper">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            culpa eaque porro rerum voluptate, obcaecati sapiente cumque saepe
            sit ratione architecto, enim ad repellat dolor quos quisquam quae
            distinctio dolores!
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            culpa eaque porro rerum voluptate, obcaecati sapiente cumque saepe
            sit ratione architecto, enim ad repellat dolor quos quisquam quae
            distinctio dolores!
          </p>
        </div>
      </div>
    )
  } else {
    return null
  }
}
