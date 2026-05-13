import Image from 'next/image';
import React from 'react'

interface ThreeFeatureProps{
  img:string;
}

const ThreeFeature:React.FC<ThreeFeatureProps> = ({img}) => {
  return (
    <div className='three-feature mt-[200px] mb-[25%] w-[95%] mx-auto relative top-0 left-0'>
      <Image src={img} alt='three-feature-img' width={1920} height={600} />
      <div className="bg-blue-300 w-[95%] h-[600px] absolute top-1/4 left-1/2 -translate-x-1/2 z-10"></div>
      <div className="bg-blue-100 w-[90%] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 z-20"></div>
    </div>
  )
}

export default ThreeFeature
