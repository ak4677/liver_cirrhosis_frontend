import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Patides from './components/Patides'
import Labentry from './components/Labentry'
import DataFetch from './components/DataFetch'
import Docdes from './components/Docdes'
function App() {

  return (
    <DataFetch>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Docdes" element={<Docdes />} />
          <Route path="/Patides" element={<Patides />} />
          <Route path="/Labentry" element={<Labentry />} />
        </Routes>
      </BrowserRouter>
    </DataFetch>
  )
}

export default App
