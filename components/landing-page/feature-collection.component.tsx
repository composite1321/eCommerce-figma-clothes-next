import React from 'react'

interface FeatureCollectionProps{
  title:string;
  subtitle:string;
}

const FeatureCollection:React.FC<FeatureCollectionProps> = ({title,subtitle}) => {
  return (
    <div className='feature-collection my-[150px] px-12 flex justify-between items-center'>
      <div className="feature-collection-conternt">
        <h3 className="text-[82px] font-bold">{title}</h3>
        <h3 className="text-[48px]">{subtitle}</h3>
      </div>
      <div className="feature-collection-box w-[450px] h-[200px] hero-bg"></div>      
    </div>
  )
}

export default FeatureCollection
