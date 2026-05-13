import Image from 'next/image'
import React from 'react'


const Card:React.FC<{ img:string }> = ({img}) => {
  return (
    <div className='card flex justify-center items-center flex-col'>
      <div className="overlay-1 w-[350px] rounded-[25px] h-[150px] card-overlay-1"></div>
      <div className="-mt-[100px] rounded-[25px] overlay-1 w-[450px] h-[250px] card-overlay-2"></div>
      <Image className='-mt-[200px]' src={img} alt="card-img" width={550} height={350} />
    </div>
  )
}

export default Card
