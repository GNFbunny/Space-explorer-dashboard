import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Navb from './Components/Navb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navb />
      <Home />
    </>
  )
}

export default App;
