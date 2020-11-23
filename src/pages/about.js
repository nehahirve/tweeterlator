import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <>
      <Header />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
          eaque porro rerum voluptate, obcaecati sapiente cumque saepe sit
          ratione architecto, enim ad repellat dolor quos quisquam quae
          distinctio dolores!
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
          eaque porro rerum voluptate, obcaecati sapiente cumque saepe sit
          ratione architecto, enim ad repellat dolor quos quisquam quae
          distinctio dolores!
        </p>
      </main>
    </>
  )
}

// yarn add @nivo/core @nivo/network

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
