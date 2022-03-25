import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='container mt-5 min-vh-100'>
      <ul>
        <li className='card h2 w-25 mx-auto text-center'>
          <Link to={"/clientes"}> Clientes </Link>
        </li>

        <li className='card h2 w-25 mx-auto text-center my-5'>
          <Link to={"/pacotes"}> Pacotes </Link>
        </li>

        <li className='card h2 w-25 mx-auto text-center'>
          <Link to={"/reservas"}> Reservas </Link>
        </li>
      </ul>
    </div>
  )
}
