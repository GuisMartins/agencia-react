import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home'
import Destinos from './components/pages/Destinos'
import Promocoes from './components/pages/Promocoes'
import Contato from './components/pages/Contato'
import Admin from './components/pages/Admin'

import ListCliente from './components/ListCliente'
import CreateCliente from './components/CreateCliente'
import ViewCliente from './components/ViewCliente'

import ListPacote from './components/ListPacote'
import CreatePacote from './components/CreatePacote'
import ViewPacote from './components/ViewPacote'

import ListReserva from './components/ListReserva'
import CreateReserva from './components/CreateReserva'
import ViewReserva from './components/ViewReserva'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Destinos" component={Destinos} />
          <Route path="/Promocoes" component={Promocoes} />
          <Route path="/Contato" component={Contato} />
          <Route path="/Admin" component={Admin} />

          <Route path="/clientes" component={ListCliente} />
          <Route path="/add-cliente/:idCliente" component={CreateCliente} />
          <Route path="/view-cliente/:idCliente" component={ViewCliente} />

          <Route path="/pacotes" component={ListPacote} />
          <Route path="/add-pacote/:idPacote" component={CreatePacote} />
          <Route path="/view-pacote/:idPacote" component={ViewPacote} />

          <Route path="/reservas" component={ListReserva} />
          <Route path="/add-reserva/:idReserva" component={CreateReserva} />
          <Route path="/view-reserva/:idReserva" component={ViewReserva} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
