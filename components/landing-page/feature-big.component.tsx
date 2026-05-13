import Image from 'next/image';
import React from 'react'

interface FeatureBigProps{
    img:string;
    title:string;
    paragraphs:string[];
}

const FeatureBig:React.FC<FeatureBigProps> = ({img,title,paragraphs}) => {
  return (
    <div className='feature-big my-[150px] flex justify-center items-center relative top-0 left-0'>
      <div className="feature-big-details ml-auto w-1/2 relative -right-12 top-0">
        <h3 className="text-5xl font-bold w-2/3">{title}</h3>
        <p className='text-md my-4 text-justify'>{paragraphs[0]}</p>
        <p className='text-md my-4 text-justify'>{paragraphs[1]}</p>
      </div>
      <div className='-z-20 w-[1100px] h-[650px] hero-bg absolute top-1/2 -translate-y-1/2 right-12 rounded-[25px]'></div>
      <Image className='relative -left-24 top-0 -z-10' src={img} alt="feature-img" width={1200} height={500} />
    </div>
  )
}

export default FeatureBig
