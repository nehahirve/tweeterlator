import React, { useState } from "react"
import Header from "../components/header"
import { ResponsiveNetwork } from "@nivo/network"

export default function About() {
  const data = {
    nodes: [
      {
        id: "1",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "2",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "3",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "4",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "5",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "6",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "7",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "8",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "9",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "10",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "11",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "12",
        radius: 8,
        depth: 1,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "0",
        radius: 12,
        depth: 0,
        color: "rgb(244, 117, 96)",
      },
      {
        id: "1.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "1.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "1.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "1.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "1.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.9",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.10",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.11",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "2.12",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.9",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.10",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.11",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.12",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "3.13",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.9",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.10",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.11",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.12",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.13",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "4.14",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "5.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.9",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.10",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.11",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "6.12",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.9",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.10",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.11",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.12",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.13",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.14",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "7.15",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.7",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "8.8",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "9.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "10.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.5",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "11.6",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "12.0",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "12.1",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "12.2",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "12.3",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "12.4",
        radius: 4,
        depth: 2,
        color: "rgb(232, 193, 160)",
      },
    ],
    links: [
      {
        source: "0",
        target: "1",
        distance: 50,
      },
      {
        source: "1",
        target: "10",
        distance: 70,
      },
      {
        source: "1",
        target: "1.0",
        distance: 30,
      },
      {
        source: "1",
        target: "1.1",
        distance: 30,
      },
      {
        source: "1",
        target: "1.2",
        distance: 30,
      },
      {
        source: "1",
        target: "1.3",
        distance: 30,
      },
      {
        source: "1",
        target: "1.4",
        distance: 30,
      },
      {
        source: "0",
        target: "2",
        distance: 50,
      },
      {
        source: "2",
        target: "2.0",
        distance: 30,
      },
      {
        source: "2",
        target: "2.1",
        distance: 30,
      },
      {
        source: "2",
        target: "2.2",
        distance: 30,
      },
      {
        source: "2",
        target: "2.3",
        distance: 30,
      },
      {
        source: "2",
        target: "2.4",
        distance: 30,
      },
      {
        source: "2",
        target: "2.5",
        distance: 30,
      },
      {
        source: "2",
        target: "2.6",
        distance: 30,
      },
      {
        source: "2",
        target: "2.7",
        distance: 30,
      },
      {
        source: "2",
        target: "2.8",
        distance: 30,
      },
      {
        source: "2",
        target: "2.9",
        distance: 30,
      },
      {
        source: "2",
        target: "2.10",
        distance: 30,
      },
      {
        source: "2",
        target: "2.11",
        distance: 30,
      },
      {
        source: "2",
        target: "2.12",
        distance: 30,
      },
      {
        source: "0",
        target: "3",
        distance: 50,
      },
      {
        source: "3",
        target: "4",
        distance: 70,
      },
      {
        source: "3",
        target: "6",
        distance: 70,
      },
      {
        source: "3",
        target: "3.0",
        distance: 30,
      },
      {
        source: "3",
        target: "3.1",
        distance: 30,
      },
      {
        source: "3",
        target: "3.2",
        distance: 30,
      },
      {
        source: "3",
        target: "3.3",
        distance: 30,
      },
      {
        source: "3",
        target: "3.4",
        distance: 30,
      },
      {
        source: "3",
        target: "3.5",
        distance: 30,
      },
      {
        source: "3",
        target: "3.6",
        distance: 30,
      },
      {
        source: "3",
        target: "3.7",
        distance: 30,
      },
      {
        source: "3",
        target: "3.8",
        distance: 30,
      },
      {
        source: "3",
        target: "3.9",
        distance: 30,
      },
      {
        source: "3",
        target: "3.10",
        distance: 30,
      },
      {
        source: "3",
        target: "3.11",
        distance: 30,
      },
      {
        source: "3",
        target: "3.12",
        distance: 30,
      },
      {
        source: "3",
        target: "3.13",
        distance: 30,
      },
      {
        source: "0",
        target: "4",
        distance: 50,
      },
      {
        source: "4",
        target: "4.0",
        distance: 30,
      },
      {
        source: "4",
        target: "4.1",
        distance: 30,
      },
      {
        source: "4",
        target: "4.2",
        distance: 30,
      },
      {
        source: "4",
        target: "4.3",
        distance: 30,
      },
      {
        source: "4",
        target: "4.4",
        distance: 30,
      },
      {
        source: "4",
        target: "4.5",
        distance: 30,
      },
      {
        source: "4",
        target: "4.6",
        distance: 30,
      },
      {
        source: "4",
        target: "4.7",
        distance: 30,
      },
      {
        source: "4",
        target: "4.8",
        distance: 30,
      },
      {
        source: "4",
        target: "4.9",
        distance: 30,
      },
      {
        source: "4",
        target: "4.10",
        distance: 30,
      },
      {
        source: "4",
        target: "4.11",
        distance: 30,
      },
      {
        source: "4",
        target: "4.12",
        distance: 30,
      },
      {
        source: "4",
        target: "4.13",
        distance: 30,
      },
      {
        source: "4",
        target: "4.14",
        distance: 30,
      },
      {
        source: "0",
        target: "5",
        distance: 50,
      },
      {
        source: "5",
        target: "5.0",
        distance: 30,
      },
      {
        source: "5",
        target: "5.1",
        distance: 30,
      },
      {
        source: "5",
        target: "5.2",
        distance: 30,
      },
      {
        source: "5",
        target: "5.3",
        distance: 30,
      },
      {
        source: "5",
        target: "5.4",
        distance: 30,
      },
      {
        source: "5",
        target: "5.5",
        distance: 30,
      },
      {
        source: "5",
        target: "5.6",
        distance: 30,
      },
      {
        source: "5",
        target: "5.7",
        distance: 30,
      },
      {
        source: "0",
        target: "6",
        distance: 50,
      },
      {
        source: "6",
        target: "6.0",
        distance: 30,
      },
      {
        source: "6",
        target: "6.1",
        distance: 30,
      },
      {
        source: "6",
        target: "6.2",
        distance: 30,
      },
      {
        source: "6",
        target: "6.3",
        distance: 30,
      },
      {
        source: "6",
        target: "6.4",
        distance: 30,
      },
      {
        source: "6",
        target: "6.5",
        distance: 30,
      },
      {
        source: "6",
        target: "6.6",
        distance: 30,
      },
      {
        source: "6",
        target: "6.7",
        distance: 30,
      },
      {
        source: "6",
        target: "6.8",
        distance: 30,
      },
      {
        source: "6",
        target: "6.9",
        distance: 30,
      },
      {
        source: "6",
        target: "6.10",
        distance: 30,
      },
      {
        source: "6",
        target: "6.11",
        distance: 30,
      },
      {
        source: "6",
        target: "6.12",
        distance: 30,
      },
      {
        source: "0",
        target: "7",
        distance: 50,
      },
      {
        source: "7",
        target: "10",
        distance: 70,
      },
      {
        source: "7",
        target: "7.0",
        distance: 30,
      },
      {
        source: "7",
        target: "7.1",
        distance: 30,
      },
      {
        source: "7",
        target: "7.2",
        distance: 30,
      },
      {
        source: "7",
        target: "7.3",
        distance: 30,
      },
      {
        source: "7",
        target: "7.4",
        distance: 30,
      },
      {
        source: "7",
        target: "7.5",
        distance: 30,
      },
      {
        source: "7",
        target: "7.6",
        distance: 30,
      },
      {
        source: "7",
        target: "7.7",
        distance: 30,
      },
      {
        source: "7",
        target: "7.8",
        distance: 30,
      },
      {
        source: "7",
        target: "7.9",
        distance: 30,
      },
      {
        source: "7",
        target: "7.10",
        distance: 30,
      },
      {
        source: "7",
        target: "7.11",
        distance: 30,
      },
      {
        source: "7",
        target: "7.12",
        distance: 30,
      },
      {
        source: "7",
        target: "7.13",
        distance: 30,
      },
      {
        source: "7",
        target: "7.14",
        distance: 30,
      },
      {
        source: "7",
        target: "7.15",
        distance: 30,
      },
      {
        source: "0",
        target: "8",
        distance: 50,
      },
      {
        source: "8",
        target: "8.0",
        distance: 30,
      },
      {
        source: "8",
        target: "8.1",
        distance: 30,
      },
      {
        source: "8",
        target: "8.2",
        distance: 30,
      },
      {
        source: "8",
        target: "8.3",
        distance: 30,
      },
      {
        source: "8",
        target: "8.4",
        distance: 30,
      },
      {
        source: "8",
        target: "8.5",
        distance: 30,
      },
      {
        source: "8",
        target: "8.6",
        distance: 30,
      },
      {
        source: "8",
        target: "8.7",
        distance: 30,
      },
      {
        source: "8",
        target: "8.8",
        distance: 30,
      },
      {
        source: "0",
        target: "9",
        distance: 50,
      },
      {
        source: "9",
        target: "9.0",
        distance: 30,
      },
      {
        source: "9",
        target: "9.1",
        distance: 30,
      },
      {
        source: "9",
        target: "9.2",
        distance: 30,
      },
      {
        source: "9",
        target: "9.3",
        distance: 30,
      },
      {
        source: "9",
        target: "9.4",
        distance: 30,
      },
      {
        source: "9",
        target: "9.5",
        distance: 30,
      },
      {
        source: "0",
        target: "10",
        distance: 50,
      },
      {
        source: "10",
        target: "11",
        distance: 70,
      },
      {
        source: "10",
        target: "10.0",
        distance: 30,
      },
      {
        source: "10",
        target: "10.1",
        distance: 30,
      },
      {
        source: "10",
        target: "10.2",
        distance: 30,
      },
      {
        source: "10",
        target: "10.3",
        distance: 30,
      },
      {
        source: "10",
        target: "10.4",
        distance: 30,
      },
      {
        source: "10",
        target: "10.5",
        distance: 30,
      },
      {
        source: "10",
        target: "10.6",
        distance: 30,
      },
      {
        source: "0",
        target: "11",
        distance: 50,
      },
      {
        source: "11",
        target: "4",
        distance: 70,
      },
      {
        source: "11",
        target: "11.0",
        distance: 30,
      },
      {
        source: "11",
        target: "11.1",
        distance: 30,
      },
      {
        source: "11",
        target: "11.2",
        distance: 30,
      },
      {
        source: "11",
        target: "11.3",
        distance: 30,
      },
      {
        source: "11",
        target: "11.4",
        distance: 30,
      },
      {
        source: "11",
        target: "11.5",
        distance: 30,
      },
      {
        source: "11",
        target: "11.6",
        distance: 30,
      },
      {
        source: "0",
        target: "12",
        distance: 50,
      },
      {
        source: "12",
        target: "12",
        distance: 70,
      },
      {
        source: "12",
        target: "12.0",
        distance: 30,
      },
      {
        source: "12",
        target: "12.1",
        distance: 30,
      },
      {
        source: "12",
        target: "12.2",
        distance: 30,
      },
      {
        source: "12",
        target: "12.3",
        distance: 30,
      },
      {
        source: "12",
        target: "12.4",
        distance: 30,
      },
    ],
  }

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
