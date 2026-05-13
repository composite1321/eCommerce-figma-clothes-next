import Image from 'next/image';
import React from 'react'

interface TriangleFeatureProps{
    img:string;
    title:string;
    paragraphs:string[];
}


const TriangleFeature:React.FC<TriangleFeatureProps> = ({img,title,paragraphs}) => {
  return (
    <div className='triangle-feature flex items-center px-12'>
      <Image className='lg:w-1/2' src={img} alt='triangle-feature-img' width={900} height={900} />
      <div className="triangle-feature-content lg:w-1/2">
        <h2 className="font-bold text-5xl">{title}</h2>
        {paragraphs && paragraphs.map((p:string,i:number) =><p key={i} className='triangle-feature-paragraph my-8'>{p}</p>)}
      </div>
    </div>
  )
}

export default TriangleFeature
