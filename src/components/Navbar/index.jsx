import React, { useRef } from 'react'
import './styles.css'

import { FaBars, FaTimes, FaCode, FaUserNinja, FaPhone } from 'react-icons/fa'
import { GiPortal } from "react-icons/gi"
function Navbar() {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header>
      <a href='#home' className='logo' >
        <GiPortal className='Fa-portal' />
        <h5 className='text-logo'>Hello World!</h5>
      </a>
      <nav ref={navRef}>
        <a href='#about'><FaUserNinja className='Fa-about' />About Me</a>
        <a href='/'><FaCode className='Fa-icon' />Projects</a>
        <a href='/'><FaPhone className='Fa-phone' />Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar
