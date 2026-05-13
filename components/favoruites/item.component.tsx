import useItem from '@/hooks/useItem'
import React from 'react'
import { ProductComponents } from '../products';

interface ItemProps{
    img:string;
    title:string;
    price:number;
}

const Item:React.FC<ItemProps> = ({img,title,price}) => {

  const { inCart , quantity , setQuantity } = useItem()

  return (
    <div className='item md:flex md:justify-center md:items-center md:gap-5'>
      <ProductComponents.Item img='/assets/products/variant-1/product-1.png' />
      <div className="item-info w-[50%] bg-blue-300 p-12 rounded-[25px]">
        <h3 className="font-bold text-5xl">Product</h3>
        <div className="item-info-row mt-[100px] flex justify-between items-center">
          <div className="item-info-quantity flex gap-5 font-bold">
            <div className='py-2 px-8 bg-blue-100 rounded-lg' onClick={()=>setQuantity(quantity - 1)}>&lt;&lt;</div>
            <div className='py-2 px-8 bg-blue-100 rounded-lg'>{quantity}</div>
            <div className='py-2 px-8 bg-blue-100 rounded-lg' onClick={()=>setQuantity(quantity + 1)}>&gt;&gt;</div>
          </div>
          <div onClick={()=>{
            if(quantity === 0){
              setQuantity(1)
            }
          }} className="bg-blue-500 py-2 px-24 rounded-lg font-bold text-white ml-12">{inCart ? 'In Cart' : "Buy"}</div>
        </div>
      </div>
    </div>
  )
}

export default Item
