import React from 'react'
import './styles.css'
import Card from './Card'
import logo from '../../assets/MarketBudget.png'
import logo2 from '../../assets/portal-ico.svg'
function Proyects() {
  return (
    <>
      <div className='card-container'>
        <Card
          img={logo}
          title='Market Budget'
          text='Online e-commerce of small products for home and family'
        />
        <Card
          img={logo2}
          title='Coming soon'
          text='yes, a description should go here'
        />
        <Card
          img={logo2}
          title='Coming soon'
          text='Here too '
        />
        <Card
          img={logo2}
          title='Coming soon'
          text='just let me finish the other projects, or start them'
        />
      </div>

    </>
  )
}

export default Proyects