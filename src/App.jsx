import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sorryCount, setSorryCount] = useState(0)
  const [brainCount, setBrainCount] = useState(0)


  return (
    <>
      <div>
        <p> Welcome to Interview Tracker:</p>
        <p> Easily keep tally of Ashley's catchphrases that she says during interview: </p>
      </div>
      <h1>Interview Tracker </h1>
      <div className="card">
        <button onClick={() => setSorryCount((sorryCount) => sorryCount + 1)}>
          Ashey said sorry {sorryCount} times
        </button>
        <br>
        </br>
        <br>
        </br>
        <button onClick={() => setBrainCount((brainCount) => brainCount + 1)}>
          Ashey said "my brain battery low" {brainCount} times
        </button>
      </div>
  
    </>
  )
}

export default App
