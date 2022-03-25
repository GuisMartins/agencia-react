import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <Link to={"/clientes"}> Clientes </Link>
      <Link to={"/pacotes"}> Pacotes </Link>
      <Link to={"/reservas"}> Reservas </Link>
    </div>
  )
}
