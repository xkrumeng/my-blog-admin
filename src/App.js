import React from 'react'
import logo from './logo.svg'
import './App.less'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Button>这是antd的按钮</Button>
        Learn React
      </header>
    </div>
  )
}

export default App
