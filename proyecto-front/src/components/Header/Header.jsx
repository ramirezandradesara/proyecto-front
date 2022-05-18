import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img src='/images/logo.png' alt='logo' />
          <p>Sentite como en tu hogar</p>
        </div>

        <div className='button-container'>
          <button className='button'>Crear cuenta</button>
          <button className='button'>Iniciar sesión</button>
        </div>
      </div>
    </nav>

  )
}

export default Header