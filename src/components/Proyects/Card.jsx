import React from 'react'

import './styles.css'

function Card(props) {
  return (
    <section>
      <div className='card-box'>
        <div className='card-image'>
          <img src={props.img} alt='logo' />
        </div>
        <div className='card-title'>{props.title}</div>
        <div className='card-text'>{props.text}</div>
        <div className='card-button'>
          <a href= {props.links} target='_blank'>
            Website
          </a>
        </div>
      </div>
    </section>
  )
}

export default Card
