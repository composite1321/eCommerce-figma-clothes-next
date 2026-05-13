import React from 'react'
import Card from './card.component'


const Cards = () => {
  return (
    <div className='flex my-[150px] justify-center items-center gap-16'> 
      <Card img='/assets/landing-page/variant-1/card-1.png'/>
      <Card img='/assets/landing-page/variant-1/card-2.png'/>
      <Card img='/assets/landing-page/variant-1/card-3.png'/>
    </div>
  )
}

export default Cards
