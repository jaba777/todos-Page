import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <h3>React</h3>
    <div className='react-sources'>
        <span>
            Example
            <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone">Source</a>
        </span>

        <span>
            React + Backbone.js
            <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone">Demo, Source</a>
        </span>

        <span>
            Scala.js + React
            <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone">Demo, Source</a>
        </span>

        <span>
            TypeScript + React
            <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone">Demo, Source</a>
        </span>

        <span>
            React + Alt
            <a href="https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone">Demo, Source</a>
        </span>

    </div>
    </header>
  )
}

export default Header
