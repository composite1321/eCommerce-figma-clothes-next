import React from 'react'
import Image from 'next/image';

interface FeatureWithCircleProps{
  img:string;
  circleImg:string;
  title:string;
  paragraph1:string;
  paragraph2:string;
}

const FeatureWithCircle:React.FC<FeatureWithCircleProps> = ({img,circleImg,title,paragraph1,paragraph2}) => {
  return (
    <div className='feature-with-circle mb-[250px] px-12 relative top-0 left-0'>
      <div className="feature-with-circle-images">
        <Image src={img} alt="img" width={700} height={700} />
        <Image className="rounded-full absolute -bottom-48 left-[20%] z-10" src={circleImg} alt="img" width={600} height={600} />
      </div>
      <div className="feature-with-circle-content absolute top-1/2 right-0 -translate-y-1/2 w-1/2">
        <h3 className="text-5xl -ml-24 font-bold">{title}</h3>
        <p className="text-2xl mt-12">{paragraph1}</p>
        <p className="text-2xl ml-12 mt-12">{paragraph2}</p>
      </div>
    </div>
  )
}

export default FeatureWithCircle
