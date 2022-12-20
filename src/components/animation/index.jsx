import React from 'react'
import './styles.css'
import DanyDev from '../../assets/Gifs-Animation/DanyDev.json'
import cv from '../../assets/Daniel-Alejandro-Ojeda-CV.pdf'

import Lottie from 'lottie-react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FaUserAlt,FaDownload } from "react-icons/fa"
import { BsCodeSquare } from "react-icons/bs"
import { GrContact } from "react-icons/gr"

import AnimationAbout from './AnimationAbout'
import AboutMe from '../AboutMe'
import Proyects from '../Proyects'
import Footer from '../Footer/Footer'

function Animation() {

  return (
    <div >
      <Parallax pages={4} style={{ top: '0', left: '0' }} className='ParallaxLayer'>

        {/* Frist section */}
        <ParallaxLayer
          id='home'
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
          <div className='animation-container'>
            <AnimationAbout />
            <Lottie animationData={DanyDev} className='lAnimation' />
          </div>
          <div className='Downloadcv'>
            <a href={cv} download='Daniel Alejandro Ojeda.pdf' target='_black'><h3 className='down'><FaDownload className='icon-down'/>Download CV</h3></a>
          </div>
        </ParallaxLayer>

        {/* Second Section */}
        <ParallaxLayer id='about' offset={1} speed={2.5} style={{ }} />

        <ParallaxLayer
          className='About-me-layer'
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f50018'
          }}>
          <h2 className='AboutMe'><FaUserAlt className='icon-About' />About Me</h2>
          <AboutMe />
        </ParallaxLayer>

        {/* Thrid section */}
        <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#000' }} />
        <ParallaxLayer
          className='Proyects-layer'
          offset={2}
          speed={0.5}
          style={{
            backgroundColor: '#000'
          }}>
          <h2 className='Proyects'><BsCodeSquare className='icon-bs' />Proyects</h2>
          <Proyects />
        </ParallaxLayer>

        {/* quarter section */}
        <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#fff' }} />
        <ParallaxLayer
          className='Contact-layer'
          offset={3}
          speed={0.5}
          style={{
            backgroundColor: '#fff',
            color: 'dark',
          }}>
          <h2 className='Contact'><GrContact className='icon-contact' />Contact</h2>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Animation