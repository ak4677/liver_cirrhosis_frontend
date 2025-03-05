import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Docdes from './components/docdes'
import Patides from './components/Patides'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Docdes" element={<Docdes/>} />
        <Route path="/Patides" element={<Patides/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
