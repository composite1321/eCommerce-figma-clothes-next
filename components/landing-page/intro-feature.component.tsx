import Image from 'next/image';
import React from 'react'

interface IntroFeatureProps{
    img1:string;
    img2:string;
    img3:string;
    img4:string;
}

const IntroFeature:React.FC<IntroFeatureProps> = ({img1,img2,img3,img4}) => {
  return (
    <div className='intro-feature flex gap-5 justify-center'>
      <Image src={img1} alt="image" width={500} height={700} />
      <Image src={img2} alt="image" width={500} height={700} />
      <div className="intro-feature-imgs-wrapper flex flex-col gap-5">
         <Image src={img3} alt="image" width={800} height={500} />
         <Image src={img4} alt="image" width={800} height={500} />
      </div>
    </div>
  )
}

export default IntroFeature
