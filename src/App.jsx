import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <input type="text" name="Username" id="username" />
        <input type="password" name="Password" id="password"/>

      </div>
    </>
  )
}

export default App
