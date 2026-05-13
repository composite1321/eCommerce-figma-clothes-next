import React from 'react'
import Item from './item.component'

const Gallery = () => {
  return (
    <div className='gallery flex justify-center gap-5'>
      <div className="gallery-col flex flex-col gap-5">
        <Item className='h-[100%]' img='/assets/landing-page/variant-1/gallery-1.png' width={500} height={900} />
        <Item className='h-[100%]' img='/assets/landing-page/variant-1/gallery-2.png' width={500} height={900} />
      </div>
      <div className="gallery-col flex flex-col gap-5">
        <Item className='h-[90%]' img='/assets/landing-page/variant-1/gallery-3.png' width={500} height={350} />
        <Item className='h-[100%]' img='/assets/landing-page/variant-1/gallery-4.png' width={500} height={900} />
        <Item className='h-[90%]' img='/assets/landing-page/variant-1/gallery-5.png' width={500} height={350} />
      </div>
      <div className="gallery-col flex flex-col gap-5">
        <Item className='h-[100%]' img='/assets/landing-page/variant-1/gallery-6.png' width={500} height={900} />
        <Item className='h-[100%]' img='/assets/landing-page/variant-1/gallery-7.png' width={500} height={900} />
      </div>
    </div>
  )
}

export default Gallery
