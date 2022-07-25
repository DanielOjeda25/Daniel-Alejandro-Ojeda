import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import './styles.css'
import Lottie from 'lottie-react'
import DanyDev from '../../assets/Gifs-Animation/DanyDev.json'
import AnimationAbout from './AnimationAbout'

function Animation() {

  return (
    <>
      <Parallax pages={2} style={{ top: '0', left: '0' }} className='ParallaxLayer'>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='animation-container'>
            <AnimationAbout />
            <Lottie animationData={DanyDev} className='lAnimation' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#000' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default Animation