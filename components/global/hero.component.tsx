import Image from 'next/image';
import React from 'react'

interface HeroProps{
    img:string; 
    title:string;
    paragraph:string;
}

const Hero:React.FC<HeroProps> = ({img,title,paragraph}) => {
  return (
    <div className='hero hero-bg relative p-12 top-0 left-0 flex justify-center items-center'>
      <div className="hero-details w-1/2">
        <h3 className="hero-title mb-6 text-[128px] font-bold">{title}</h3>
        <p className="text-[24px]">{paragraph}</p>
      </div>
      <Image className='ml-auto' src={img} width={900} height={900} alt="hero-bg" />
    </div>
  )
}

export default Hero
