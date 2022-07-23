import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import './AnimationAboutStyles.css'

function AnimationAbout() {
  const [about, setAbout] = useState([])

  const transition = useTransition(about, {
    from: { x: -300, y: 900, opacity: 0, width: 10, height: 10 },
    enter: item => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay })
      await next({ x: 0, width: 260, height: 100 })
    },
    leave: { x: 0, y: 500, opacity: 0,width: 10, height: 10 , delay: 200 },
  })
  const handleAnimationChange = () => {
    setAbout(item => item.length ? [] : [
      { y: 0, delay: 100 },
    ])
  }
  const txt1 = "Hi, I'm Daniel Alejandro Ojeda"
  const txt2 = 'I am a Front-End Developer'
  return (
    <>
      <button onClick={handleAnimationChange} className="btn">

        <span className="new">¡Click on me!</span>
        <div className="old">
          <span>¿Who I Am?</span>
          <span aria-hidden>¿Who I Am?</span>
        </div>
      </button>

      {transition((style, item) =>
        item
          ? (
            <>
              <animated.div style={style} className='animated-box'>
                <animated.p style={style} className='Who'>{txt1}</animated.p>
              </animated.div>

            </>

          )
          : ''
      )}
      {
        transition((style, item) =>
          item
            ? (
              <>
                <animated.div style={style} className='animated-box2'>
                  <animated.p style={style} className='dev'>{txt2}</animated.p>
                </animated.div>
              </>

            )
            : ''
        )}
    </>
  )
}

export default AnimationAbout