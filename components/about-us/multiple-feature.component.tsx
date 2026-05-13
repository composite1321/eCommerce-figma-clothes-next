import Image from 'next/image';
import React from 'react'

interface MultipleFeatureProps{
   img1:string;
   img2:string;
   img3:string;
   img4:string;
   img5:string;
   img6:string;
   img7:string;
   vectorImg:string;
}


const MultipleFeature:React.FC<MultipleFeatureProps> = ({img1,img2,img3,img4,img5,img6,img7,vectorImg}) => {
  return (
    <div className='multiple-feature mb-[10%]'>
      <div className='md:flex-wrap md:flex md:justify-center md:items-center md:gap-5'>
        <Image src={img1} alt="hexagon-img" width={400} height={300} />
        <Image src={img2} alt="hexagon-img" width={400} height={300} />
        <Image src={img3} alt="hexagon-img" width={400} height={300} />
      </div>
      <div className='md:flex-wrap -my-12 md:flex md:justify-center md:items-center md:gap-5'>
        <Image src={img4} alt="hexagon-img" width={400} height={300} />
        <Image src={img5} alt="hexagon-img" width={400} height={300} />
        <Image src={img6} alt="hexagon-img" width={400} height={300} />
        <Image src={img7} alt="hexagon-img" width={400} height={300} />
      </div>
       <div className='md:flex-wrap md:flex md:justify-center md:items-center md:gap-5'>
        <Image src={vectorImg} alt="hexagon-img" width={400} height={300} />
        <Image src={vectorImg} alt="hexagon-img" width={400} height={300} />
        <Image src={vectorImg} alt="hexagon-img" width={400} height={300} />
      </div>
    </div>
  )
}

export default MultipleFeature
