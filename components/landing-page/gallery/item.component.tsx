import Image from 'next/image';
import React from 'react'

interface ItemProps{
  className:string;
  img:string;
  width:number;
  height:number;
}

const Item:React.FC<ItemProps> = ({className,img,width,height}) => {
  return (
    <div className={className}>
      <Image src={img} alt="img" width={width} height={height} />
    </div>
  )
}

export default Item
