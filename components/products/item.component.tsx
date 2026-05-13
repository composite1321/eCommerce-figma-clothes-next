import Image from 'next/image';
import React from 'react'

interface ItemProps{
  img:string;
  margin1fix?:string;
  margin2fix?:string;
}

const Item:React.FC<ItemProps> = ({img,margin1fix,margin2fix}) => {
  return (
    <div className={`product relative top-0 left-0 md:min-w-[25%] my-8`}>
      <Image className='absolute -top-8 left-15' src="/assets/triangle-vector.png" alt='vector' width={60} height={60} />
      <div className="product-img-wrapper w-[100%] relative top-0 left-0">
        <Image className='block mx-auto' src={img} alt='product-img' width={300} height={500} />
        <h3 className={`absolute bottom-24 left-24 z-10 text-white text-2xl font-bold italic underline ${margin1fix}`}>Product</h3>
      </div>
      <div className="product-controls w-[100%] absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-between items-center">
        <button className={`product-btn cursor-pointer hover:bg-blue-500 px-12 py-4 rounded-lg ml-24 mt-12 mr-auto bg-blue-300 font-bold text-white text-xl ${margin1fix}`}>Buy</button>
        <div className={`product-price cursor-pointer hover:bg-blue-500 hover:text-white transition-all font-bold text-2xl rounded-full px-9 py-12 bg-blue-50 mr-8 mt-2 ${margin2fix}`}>
          245$
        </div>
      </div>
    </div>
  )
}

export default Item
