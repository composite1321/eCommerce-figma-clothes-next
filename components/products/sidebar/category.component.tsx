import React from 'react'

interface CategoryProps{
    title:string;
    handleChange:(state:any) => any
}

const Category:React.FC<CategoryProps> = ({title,handleChange}) => {

  const handleClick = (e:any) =>{
    if(handleChange){
      handleChange(e.target.value)
    }
  }

  return <h3 onClick={(e)=>handleClick(e)} className='sidebar-category font-bold text-white text-sm my-2 hover:underline cursor-pointer'>{title}</h3>
}

export default Category
