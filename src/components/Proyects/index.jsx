import React from 'react'
import './styles.css'
import Card from './Card'
import logo from '../../assets/portal-ico.svg'
function Proyects() {
  return (
    <>
    {/* <div className='Title'>
      <h2>Proyects</h2>
    </div> */}
      <div className='card-container'>

        <Card
          img={logo}
          title='Nuevo titulo'
          text='Lorem'
        />
        <Card
          img={logo}
          title='Nuevo titulo 2'
          text='Lorem Ipson'
        />
        <Card
          img={logo}
          title='Nuevo titulo 3'
          text='Lorem Ipson Medium'
        />
         <Card
          img={logo}
          title='Nuevo titulo 3'
          text='Lorem Ipson Medium'
        />
      </div>

    </>
  )
}

export default Proyects