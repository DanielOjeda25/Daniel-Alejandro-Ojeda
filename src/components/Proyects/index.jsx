import React from 'react'
import './styles.css'
import Card from './Card'
import logo from '../../assets/MarketBudget.png'
import logo2 from '../../assets/poke.svg'
function Proyects() {
  return (
    <>
      <div className='card-container'>
        <Card
          img={logo}
          title='Market Budget UI'
          text='Online e-commerce of small products for home and family'
          links='https://danielojeda25.github.io/Market-Budget-UI/'
        />
        <Card
          img={logo2}
          title='Pokedux'
          text='An application to search pokemon from an API'
          links='https://danielojeda25.github.io/Pokedux/'
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