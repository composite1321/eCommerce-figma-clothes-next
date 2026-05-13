import Image from 'next/image';
import React from 'react'

interface TitleProps{
  title:string;
  paragraph:string;
  contentWidth?:string;
}

const Title:React.FC<TitleProps> = ({title,paragraph,contentWidth}) => {
  return (
    <div className='title relative top-0 left-0 my-[150px] flex justify-center'>
        <Image className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10' src="/assets/line-vector.png" alt='vector' width={1600} height={200}/>
        <div className="title-vectors-left relative top-0 left-0">
          <Image className='relative -top-8 left0%] -z-10' src="/assets/circle-vector.png" alt="vector" width={50} height={50} />
          <Image className='relative top-12 -left-[150px]' src="/assets/triangle-vector.png" alt="vector" width={100} height={100} />
        </div>
        <div className={`title-content ${contentWidth}`}>
          <h3 className="text-title font-bold text-center">{title}</h3>
          <p className="text-subtitle text-center">{paragraph}</p>
        </div>
        <div className="title-vectors-left relative top-0 left-0">
          <Image className='relative -top-8 left-24' src="/assets/triangle-vector.png" alt="vector" width={100} height={100} />
          <Image className='relative top-8 -left-[150px] -z-10' src="/assets/circle-vector.png" alt="vector" width={50} height={50} />
        </div> 
    </div>
  )
}

export default Title
