import Image from 'next/image';
import React from 'react'

interface CardProps{
    img:string;
    title:string;
    paragraph:string;
    
}

const Card:React.FC<CardProps> = ({img,title,paragraph}) => {
  return (
    <div className='about-card relative top-0 left-0'>
      <Image className='block mx-auto' src={img} alt="card-img" width={500} height={500} />
      <div className="about-card-content w-[70%] p-8 text-white relative -top-12 left-0  mx-auto bg-blue-300 rounded-lg">
        <h3 className="text-2xl w-max mb-4 font-bold text-white text-center w-[80%] mx-auto bg-blue-500 rounded-lg px-4">{title}</h3>
        <p className="font-bold text-justify">{paragraph}</p>
      </div>
    </div>
  )
}

export default Card
