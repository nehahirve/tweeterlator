import React from 'react'
import Header from '../components/header'
import MyGraph from '../components/my_graph'
import data from '../../static/neha.json'

export default function Neha() {
  return (
    <>
      <Header />
      <main>
        <MyGraph data={data} />
      </main>
    </>
  )
}
