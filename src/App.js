import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.js'
import Destinos from './components/pages/Destinos.js'
import Promocoes from './components/pages/Promocoes.js'
import Contato from './components/pages/Contato.js'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Promocoes" element={<Promocoes />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
