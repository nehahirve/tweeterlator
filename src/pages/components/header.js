import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/index/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  )
}
