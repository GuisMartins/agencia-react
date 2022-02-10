import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home.js'
import Destinos from './components/pages/Destinos.js'
import Promocoes from './components/pages/Promocoes.js'
import Contato from './components/pages/Contato.js'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destinos" exact element={<Destinos />} />
          <Route path="/promocoes" exact element={<Promocoes />} />
          <Route path="/contato" exact element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
