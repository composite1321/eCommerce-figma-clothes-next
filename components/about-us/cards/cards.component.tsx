import React from 'react'
import Card from './card.component'

const Cards = () => {
  return (
    <div className='about-cards my-[150px] flex gap-8 justify-center items-start'>
      <Card 
        img="/assets/about-us/card-1.png"
        title="Quality You Can Trust"
        paragraph="We carefully select every product to ensure it meets our high standards of quality, durability, and value. From sourcing to delivery, our focus is on giving you items you can rely on—because your trust matters to us."
      />
      <Card 
        img="/assets/about-us/card-2.png"
        title="Shopping Experience"
        paragraph="Shopping should be simple and enjoyable. Our platform is designed to make browsing, selecting, and purchasing effortless, with secure payments and smooth navigation every step of the way."
      />
      <Card 
        img="/assets/about-us/card-3.png"
        title="Customer First, Always"
        paragraph="Our customers are at the center of everything we do. We’re dedicated to providing responsive support, easy returns, and a hassle-free experience so you can shop with complete confidence."
      />  
    </div>
  )
}

export default Cards
