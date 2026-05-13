import Image from 'next/image'
import React from 'react'

interface BannerProps{
  img:string;
  title?:string;
  subtitle?:string;
}

const Banner:React.FC<BannerProps> = ({img,title,subtitle}) => {
  return (
    <div className='relative top-0 left-0'>
      <Image src={img} alt='banner' width={1920} height={500}/>
      <h2 className="font-bold text-white text-center w-[100%] text-[128px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h2>
      <h3 className="font-bold text-white text-center w-[100%] text-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[150%]">{subtitle}</h3>
    </div>
  )
}

export default Banner
