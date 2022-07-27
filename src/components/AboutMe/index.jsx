import React, { useState } from 'react'
import logo from '../../assets/me.png'
import './styles.css'
import data from './data'
import {
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
  animated,
} from '@react-spring/web'

function AboutMe() {
  //controlaremos el estado de un div
  const [isClick, setIsClick] = useState(false)

  const springApi = useSpringRef()

  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '5%', background: 'black' },
    to: {
      size: isClick ? '100%' : '20%',
      background: isClick ? '#fff' : 'black',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(isClick ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })
  /**Esto creara la secuencia */
  useChain(isClick ? [springApi, transApi] : [transApi, springApi], [
    0,
    isClick ? 0.1 : 0.6,
  ])

  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  const handleClick = () => {
    setIsClick(!isClick)
    toggle(!state)
  }
  return (
    <div className='wrapper'>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className='container'
        /**Crear una funcion afuera y conbinar ambas funciones */
        onClick={handleClick}>
        {transition((style, item) => (
          <animated.div
            className='item'
            style={{ ...style, background: item.css }}>
            {' '}
            <p className='section-about '>
              Hello I am Daniel Alejandro Ojeda, student oriented to Frontend
              Development, I have a great passion for development, both personal
              and in the world of programming. <br /> I would like to be able to
              gain experience, with this I hope to offer support to the position
              with my knowledge and my facility in communication.
            </p>
            <img src={logo} alt='me' className='me' />
          </animated.div>
        ))}
      </animated.div>
      {isClick ? (
        ''
      ) : (
        <animated.div
          className='click'
          style={{
            opacity: x.to({ range: [1, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}>
          <p>C'mon, Click the box</p>
        </animated.div>
      )}
    </div>
  )
}

export default AboutMe
