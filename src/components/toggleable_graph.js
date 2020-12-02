import React, { useEffect, useRef, useState } from 'react'
import colors from '../../static/colours.json'
import SunburstGraph from '../components/sunburst_graph'
import VisGraph from '../components/vis_graph'
import SentimentGradient from '../components/sentiment_gradient'

export default function ToggleableGraph(props) {
  if (props.visible && props.isOpen) {
    return (
      <section className="graph-container">
        <div className="sunburst">
          <SunburstGraph
            station={props.station}
            key={props.id}
            update={props.update}
          />
        </div>
      </section>
    )
  } else {
    return null
  }
}
