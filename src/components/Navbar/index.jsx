import React from 'react'
import './styles.css'
import logo from '../../assets/portal-9.svg'
function Navbar() {

  const toggleMobileMenu = ({menu}) => {
    menu.classList.toggle('open')
  }
  return (
    <header className='header'>
      {/* Arreglar el logo y el texto, dejar en una linea */}    
      <div className='logo'>
        <a>
          <img src={logo} className='logo-portal'/>
          <h4 className='text-logo'>Hello World!</h4>
        </a>
      </div>
      <nav className='nav'>
        <ul>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <div id='hamburger-icon' onClick={toggleMobileMenu}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <ul className='mobile-toggle'>
          <ul>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
