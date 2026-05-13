import Image from 'next/image';
import React from 'react'

interface FormProps{
    img:string;
}

const Form:React.FC<FormProps> = ({img}) => {
  return (
    <div className='form  my-[150px] bg-blue-300 w-[90%] mx-auto rounded-[100px] md:flex md:gap-12 md:justify-center md:items-center'>
      <Image className='lg:w-1/2 rounded-[100px]' src={img} alt="form-img" width={900} height={1100} />
      <form className='form-content-form lg:w-1/2 px-12' action="">
        <div className="form-field w-[100%] my-4">
            <label className='font-bold' htmlFor="">Name:</label>
            <input className='rounded-lg p-2 bg-blue-100 w-[100%]' type="text" name="" id="" />
        </div>
        <div className="form-fields flex gap-3">
            <div className="form-field w-[100%] my-4">
                <label className='font-bold' htmlFor="">Name:</label>
                <input className='rounded-lg p-2 bg-blue-100 w-[100%]' type="text" name="" id="" />
            </div>
            <div className="form-field w-[100%] my-4">
                <label className='font-bold' htmlFor="">Name:</label>
                <input className='rounded-lg p-2 bg-blue-100 w-[100%]' type="text" name="" id="" />
            </div>
        </div>
        <div className="form-textarea">
            <textarea className='rounded-lg bg-blue-100 p-2 w-[100%] h-[300px]' name="" id=""></textarea>
        </div>
        <div className="form-field w-[100%] my-4">
            <label className='font-bold' htmlFor="">Name:</label>
            <input className='rounded-lg p-2 bg-blue-100 w-[100%]' type="text" name="" id="" />
        </div>
        <div className="form-field w-[100%] my-4">
            <label className='font-bold' htmlFor="">Name:</label>
            <input className='rounded-lg p-2 bg-blue-100 w-[100%]' type="text" name="" id="" />
        </div>
      </form>
    </div>
  )
}

export default Form
