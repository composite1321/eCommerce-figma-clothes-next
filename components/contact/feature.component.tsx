import Image from 'next/image';
import React from 'react'

interface FeatureProps{
    img1:string;
    img2:string;
    img3:string;
    title1:string;
    title2:string;
}

const Feature:React.FC<FeatureProps> = ({img1,img2,img3,title1,title2}) => {
  return (
    <div className='feature relative top-0 left-0'>
      <h3 className="font-bold text-5xl absolute top-[20%] left-[25%]">{title1}</h3>
      <Image className='block mx-auto my-4 translate-x-[200px] translate-y-[80px]' src={img1} alt='feature-img' width={400} height={400}/>
      <Image className='block mx-auto my-4' src={img2} alt='feature-img' width={400} height={400}/>
      <Image className='block mx-auto my-4 -translate-x-[200px] -translate-y-[80px]' src={img3} alt='feature-img' width={400} height={400}/>
      <h3 className="font-bold text-5xl absolute bottom-[20%] right-[25%]">{title2}</h3>
    </div>
  )
}

export default Feature
