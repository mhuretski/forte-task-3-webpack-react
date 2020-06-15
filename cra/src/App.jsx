import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import 'sanitize.css'
import './App.scss'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

function App() {
  return (
    <div className="App">
      <Title>styled component here</Title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
