import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">THIRSTY POOCH</Link>
        </div>
        <div className="navigation">
          <nav>
            <a href="https://github.com/Thirstypooch">Work</a>
            <a href="https://twitter.com/ThirstyPooch">Profile</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
