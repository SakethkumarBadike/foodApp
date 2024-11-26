import { useState,Fragment } from 'react'
import Header from './components/header.jsx'
import Home from './components/home/home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
