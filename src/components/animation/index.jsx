import React from 'react'
import './styles.css'
import DanyDev from '../../assets/Gifs-Animation/DanyDev.json'

import Lottie from 'lottie-react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FaUserAlt } from "react-icons/fa"
import {BsCodeSquare } from "react-icons/bs"

import AnimationAbout from './AnimationAbout'
import AboutMe from '../AboutMe'
import Proyects from '../Proyects'

function Animation() {

  return (
    <div >
      <Parallax pages={4} style={{ top: '0', left: '0' }} className='ParallaxLayer'>

        {/* Frist section */}
        <ParallaxLayer
          id='home'
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='animation-container'>
            <AnimationAbout />
            <Lottie animationData={DanyDev} className='lAnimation' />
          </div>
        </ParallaxLayer>

        {/* Second Section */}
        <ParallaxLayer id='about' offset={1} speed={2.5} style={{ backgroundColor: '#f50018' }} />
        
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
          <h2 className='AboutMe'><FaUserAlt className='icon-About'/>About Me</h2>
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
          <h2 className='Proyects'><BsCodeSquare className='icon-bs'/>Proyects</h2>
          /**/Hacer el Modal */
          <Proyects />s
        </ParallaxLayer>

        {/* quarter section */}
        <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: '#fff' }} />
        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'dark',
          }}>
          <p>4</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Animation