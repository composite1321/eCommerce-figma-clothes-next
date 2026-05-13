import useItem from '@/hooks/useItem';
import Image from 'next/image'
import React from 'react'
import { ProductComponents } from '../../products';
import { SidebarComponents } from '../../products/sidebar';

interface MainDetailsProps{
    mainImg:string;
    choice1img:string;
    choice2img:string;
    choice3img:string;
    choice4img:string;
    title:string;
    price:number;
    details:string;
}

const MainDetails:React.FC<MainDetailsProps> = ({mainImg,choice1img,choice2img,choice3img,choice4img,title,price,details}) => {

  const { quantity, inCart, setQuantity } = useItem()

  return (
    <div className='main-details p-[100px] flex justify-center items-start'>
      <div className="main-details-images">
        <div className="main-details-main-img md:w-1/2">
            <Image src={mainImg} alt="main-img" width={2400} height={1080} />
        </div>
        <div className="main-details-choices"></div>
        <div className="main-details-choices-block flex gap-3">
            <div className="main-details-placeholder bg-blue-300 w-1/4 mt-2 h-[105px] rounded-lg"></div>
            <div>
                <Image className='block my-2' src={choice1img} alt="main-img" width={300} height={200} />
                <Image className='block my-2' src={choice2img} alt="main-img" width={300} height={200} />
            </div>
        </div>
        <div className="main-details-choices-block flex gap-3">
            <div>
                <Image className='block my-2' src={choice3img} alt="main-img" width={300} height={200} />
                <Image className='block my-2' src={choice4img} alt="main-img" width={300} height={200} />
            </div>
            <div className="main-details-placeholder bg-blue-300 w-1/4 mt-2 h-[105px] rounded-lg"></div>
        </div>
      </div>
      <div className="main-details-info md:w-1/2">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="main-details-price my-2 flex justify-between items-center">
            <h3 className="font-bold text-xl">Price</h3>
            <div className="main-details-arrow"></div>
            <h3 className="font-bold">{price}$</h3>
        </div>
        <div className="main-details-quantity my-2 flex justify-between items-center">
            <div className='flex justify-between items-center w-[100%]'>
                <h3 className="font-bold text-xl">Quantity</h3>
                <div className="main-details-arrow"></div>
                <h3 className="font-bold mx-auto">{quantity}</h3>
            </div>
            <div className='main-details-quantity-wrapper flex gap-1'>
                <div className='main-details-quantity w-8 h-8 p-2 bg-blue-500 text-white flex justify-center items-center cursor-pointer hover:bg-blue-300' onClick={()=>setQuantity(quantity + 1)}>+</div>
                <div className='main-details-quantity w-8 h-8 p-2 bg-blue-500 text-white flex justify-center items-center cursor-pointer hover:bg-blue-300' onClick={()=>{
                    if(quantity > 0) setQuantity(quantity - 1)
                    }}>-</div>
            </div>
        </div>
        <p className='text-md italic'>{details}</p>
        <h3 className='font-bold text-xl my-4'>Colors</h3>
        <div className="main-details-colors-wrapper w-[80%]">
          <SidebarComponents.Colors colors={[
              '#FF0400',
              '#FFB700',
              '#00FF51',
              '#4000FF',
              '#C8FF00',
              '#FF0095',
              '#177061',
              '#A32523',
              '#615D47',
              '#2C3B35',
              '#ECFEF4',
              '#3E2222',
              '#999922',
              '#3EB522',
            ]} />
        </div>
        <button onClick={()=>{
            if(quantity === 0){
                setQuantity(quantity + 1)
            }
        }} className="mt-8 py-2 font-bold text-xl text-white w-[100%] bg-blue-500 hover:bg-blue-300">{inCart ? "In Cart" : "Buy"}</button>
      </div>    
    </div>
  )
}

export default MainDetails
