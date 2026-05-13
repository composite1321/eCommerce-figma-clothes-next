import React from 'react'

interface FormProps{
    formData:any;
    handleChange:(state:any) => any
}

const Form:React.FC<FormProps> = ({formData,handleChange}) => {
  return (
    <div className="sidebar-price mt-8">
        <label className='text-white font-bold' htmlFor="">Min Price:</label>
        <div className="sidebar-field font-bold text-white py-2 w-[100%] bg-blue-500 text-center my-2">
            <input className='w-[100%] text-center' value={formData.minPrice} type="text" name="minPrice"  onChange={(e)=>handleChange(e)}/>
        </div>
        <label className='text-white font-bold' htmlFor="">Max Price:</label>
        <div className="sidebar-field font-bold text-white py-2 w-[100%] bg-blue-500 text-center my-2">
            <input className='w-[100%] text-center' value={formData.maxPrice} type="text" name="maxPrice" onChange={(e)=>handleChange(e)}/>
        </div>
    </div>
  )
}

export default Form
