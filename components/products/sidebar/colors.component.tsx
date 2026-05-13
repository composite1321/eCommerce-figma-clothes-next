import React from 'react'

interface ColorProps{
    colors:string[];
    handleChange?:(state:any) => any
}

const Colors:React.FC<ColorProps> = ({colors,handleChange}) => {


  const handleClick = (e:any) =>{
    if(handleChange){
      handleChange(e.target.value)
    }
  }

  return (
    <div className='sidebar-colors my-4 flex flex-wrap w-[100%] gap-3'>
      {colors && colors.map((c:string,i:number) => <div style={{backgroundColor:c}} className='w-12 h-12 rounded-md hover:opacity-75 cursor-pointer' key={i}></div>)}
    </div>
  )
}

export default Colors
