import React from 'react'

export default function SentimentGradient(props) {
    if(props.isOpen){
  return (
    <>
      <div className="sentiment-gradient"></div>
    </>
  )
    } else {
        return null
    }
}
