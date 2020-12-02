import React from 'react'

export default function SentimentGradient(props) {
  if (props.isOpen && !props.graph) {
    return (
      <>
        <div className="sentiment-gradient">
          <span className="positive">
            Positive <br />
            Sentiment
          </span>
          <span className="sentiment-bar"></span>
          <span className="negative">
            Negative <br />
            Sentiment
          </span>
        </div>
      </>
    )
  } else {
    return null
  }
}
