import React from 'react'
import './styles.css'
import DanyDev from '../../assets/Gifs-Animation/DanyDev.json'

import Lottie from 'lottie-react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import AnimationAbout from './AnimationAbout'
import AboutMe from '../AboutMe'

function Animation() {

  return (
    <div >
      <Parallax pages={2} style={{ top: '0', left: '0' }} className='ParallaxLayer'>
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
        <ParallaxLayer id='about' offset={1} speed={2} style={{ backgroundColor: '#f50018' }} />

        <ParallaxLayer
          offset={1}
          speed={0.7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AboutMe />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Animation