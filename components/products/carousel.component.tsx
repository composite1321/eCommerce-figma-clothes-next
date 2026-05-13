import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

interface CarouselProps{
    images:string[];
}

const Carousel:React.FC<CarouselProps> = ({images}) => {

  const [imgs,setImgs] = useState<string[]>([...images,...images])
  const [count,setCount] = useState<number>(1);
  const [translate,setTranslate] = useState<number>(0)

  const viewRef = useRef<HTMLDivElement | null>(null)
  const itemRef = useRef<HTMLImageElement | null>(null)

  const handleTranslate = () =>{
    if(itemRef.current){
      setTranslate(count * itemRef.current.clientWidth)
      if(viewRef.current){
        viewRef.current.style.transform = `translate(-${translate}px)`
      }
    }
  }

  const handlePrev = () =>{
    if(count > 0){
      setCount(count - 1)
    }else{
      setCount(4)
    }
  }

  const handleNext = () =>{
    if(count < 4){
      setCount(count + 1)
    }else{
      setCount(0)
    }
  }

  useEffect(()=>{
    handleTranslate()
  },[count])

  return (
    <div className='carousel my-[400px] relative top-0 left-0 my-4 p-4 bg-blue-300 min-w-full'>
      <Image className='absolute top-1/2 -translate-y-1/2 left-0 -z-10' src="/assets/products/variant-1/vector-line.png" alt='vector' width={1920} height={700} />
      <div className="carousel-controls py-4 px-6 bg-blue-300 rounded-full absolute -top-24 left-0 z-20">
        <div onClick={()=>handlePrev()} className="carousel-prev py-4 px-6 bg-blue-500 text-white rounded-full">&lt;</div>   
      </div>
      <div className="carousel-controls py-4 px-6 bg-blue-300 rounded-full absolute -bottom-24 right-0 z-20">
        <div onClick={()=>handleNext()} className="carousel-next py-4 px-6 bg-blue-500 text-white rounded-full">&gt;</div>   
      </div>
      <div ref={viewRef} className="carousel-view w-max flex justify-start items-center gap-4 relative top-0 left-0">
        {imgs.map((img,index) => 
                        <div key={index} className='carousel-item h-[400px] rounded-lg overflow-hidden md:min-w-1/2 lg:min-w-[15%]'>
                            <Image ref={itemRef} className='block w-[100%]' src={img} alt='carousel-img' height={400} width={400} />
                        </div>)}
      </div>    
    </div>
  )
}

export default Carousel
