import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Agencia <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inico
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/destinos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/promocoes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Promoções
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contato"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
