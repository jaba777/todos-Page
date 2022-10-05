import React from 'react'
import './ReactText.css';

const ReactText = () => {
  return (
    <div className='blockquote'>
      <p className='react-text'>
      React is a JavaScript library for creating user interfaces. 
      Its core principles are declarative code, efficiency, and flexibility. 
      Simply specify what your component looks like and React will keep
       it up-to-date when the underlying data changes.
      </p>

      <span>
        <a href="https://reactjs.org/">React</a>
      </span>
    </div>
  )
}

export default ReactText
