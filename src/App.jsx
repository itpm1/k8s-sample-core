import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState("")

  const fnCheckStatus = () => {
    axios.get('http://localhost:5000/getStatus').then((res) => setCount(res.data)).catch((err) => alert(err))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => fnCheckStatus()}>
          Click Me
        </button>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

